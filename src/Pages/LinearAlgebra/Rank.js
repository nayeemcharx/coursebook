import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Rank() {
  const [step, setStep] = useState(0);
  const inputRef = useRef(null);
  const [matrix, setMatrix] = useState([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ]);
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [pivots, setPivots] = useState([]);
  const [rrefMatrix, setRrefMatrix] = useState([]);
  const [finished, setFinished] = useState(false);
  useEffect(() => {
    calculateRrefStepByStep();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const handleMatrixChange = () => {
    const matrixString = inputRef.current.value;
    const matrixRows = matrixString.split(';');
    const matrixArray = matrixRows.map((row) => {
      const rowValues = row.split(',');
      return rowValues.map((col) => parseInt(col));
    });
    //check if matrix is valid
    if (matrixArray.length === 0) {
      return;
    }
    const firstRowLength = matrixArray[0].length;
    for (let i = 1; i < matrixArray.length; i++) {
      if (matrixArray[i].length !== firstRowLength) {
        return;
      }
    }
    setRows(matrixArray.length);
    setColumns(matrixArray[0].length);
    setMatrix(matrixArray);
  };

  const calculateRrefStepByStep = () => {
    let lead = 0;
    let mat = matrix;
    let pivotArray = [];
    for (let r = 0; r < Math.min(step, rows); r++) {
        if (columns <= lead) {
            setFinished(true);
            return;
        }
        let i = r;
        while (mat[i][lead] === 0) {
            i++;
            if (rows === i) {
                i = r;
                lead++;
                if (columns === lead) {
                    setFinished(true);
                    return;
                }
            }
        }
        let tmp = mat[i];
        mat[i] = mat[r];
        mat[r] = tmp;
        let val = mat[r][lead];
        pivotArray.push(lead);
        for (let j = 0; j < columns; j++) {
            mat[r][j] /= val;
        }
        for (let i = 0; i < rows; i++) {
            if (i === r) continue;
            val = mat[i][lead];
            for (let j = 0; j < columns; j++) {
                mat[i][j] -= val * mat[r][j];
            }
        }
        lead++;
    }
    setRrefMatrix(mat);
    setPivots(pivotArray);
    if (step === rows || step === columns) {
        setFinished(true);
    }
  };

  const nextStep = () => {
    if (step < rows) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (finished) {
        setFinished(false);
    }
    if (step > 0) {
        setStep(step - 1);
    }
  };

  return (
    <div className='animationContainer'>
      <h1>RREF Derivation</h1>
      <AnimatePresence mode='wait'>
        {step === 0 && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <label>
                Matrix:
                <input type="text" ref={inputRef} placeholder='M00, M01, M02; M10, M11, M12; M20, M21, M22'/>
                <button onClick={handleMatrixChange}>Enter</button>
            </label>
            <p>Step 1: Convert the matrix to row echelon form.</p>
            <Matrix matrix={matrix} />
            <button onClick={nextStep}>Next Step</button>
          </motion.div>
        )}
        {step !== 0 && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>Step {step}: RREF Matrix:</h2>
            <Matrix matrix={rrefMatrix} pivots={pivots} />
            {finished && <p>Finished</p>}
            {!finished &&
            <><button onClick={previousStep}>Previous Step</button>
                <button onClick={nextStep}>Next Step</button></>
                
            }
            
          </motion.div>
        )}
        {finished && (
          <motion.div
            key={step + 1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2>Step {step + 1}: Conclusion:</h2>
            <p>The rank of the matrix is {pivots.length}.</p>
            <button onClick={previousStep}>Previous Step</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function Matrix({ matrix, pivots }) {
  return (
    <table className='matrix'>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td key={j} style={{ backgroundColor: pivots?.includes(j) ? 'yellow' : '' }}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Rank;
  
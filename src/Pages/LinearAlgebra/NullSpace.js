import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NullSpace() {
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
  useEffect(() => {
    calculateRrefStepByStep();
  }, [step]);

  const handleMatrixChange = () => {
    const matrixString = inputRef.current.value;
    const matrixRows = matrixString.split(';');
    const matrixArray = matrixRows.map((row) => {
      const rowValues = row.split(',');
      return rowValues.map((col) => parseInt(col));
    });
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
            
            return;
        }
        let i = r;
        while (mat[i][lead] === 0) {
            i++;
            if (rows === i) {
                i = r;
                lead++;
                if (columns === lead) {
                    
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
    if (pivotArray.length !== 0) {
        setPivots(pivotArray);
    }
  };

  const nextStep = () => {
    if (step < rows) {
      setStep(step + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
        setStep(step - 1);
    }
  };

  return (
    <div>
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
            <button onClick={previousStep}>Previous Step</button>
            <button onClick={nextStep}>Next Step</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
function Matrix({ matrix, pivots }) {
  return (
    <table>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((col, j) => (
              <td key={j} style={{ backgroundColor: pivots?.includes(j) ? 'yellow' : 'white' }}>
                {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NullSpace;
  
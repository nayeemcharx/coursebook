import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function NullSpace() {
  const [step, setStep] = useState(0);
  const [matrix, setMatrix] = useState([
    [2, 4, 6],
    [1, 3, 5],
    [0, 1, 2]
  ]);
  const [pivots, setPivots] = useState([]);
  const [nullSpace, setNullSpace] = useState([]);

  const nextStep = () => {
    switch (step) {
      case 0:
        setPivots([0]);
        setStep(step + 1);
        break;
      case 1:
        setPivots([0, 1]);
        setStep(step + 1);
        break;
      case 2:
        setPivots([0, 1]);
        setNullSpace([[1], [-2], [1]]);
        setStep(step + 1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Null Space Derivation</h1>
      <AnimatePresence mode='wait'>
        {step === 0 && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Step 1: Convert the matrix to row echelon form.</p>
            <Matrix matrix={matrix} />
            <button onClick={nextStep}>Next Step</button>
          </motion.div>
        )}
        {step === 1 && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Step 2: Identify the pivot columns.</p>
            <Matrix matrix={matrix} pivots={pivots} />
            <button onClick={nextStep}>Next Step</button>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Step 3: Write the null space as a linear combination of vectors.</p>
            <p>
              Null space = span(
              <Vector vector={nullSpace} />)
            </p>
            <button onClick={nextStep}>Next Step</button>
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <p>Null Space Derivation complete.</p>
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

function Vector({ vector }) {
    return (
      <span>
        {vector.map((value, i) => (
          <span key={i}>
            {value}
            {i !== vector.length - 1 ? ', ' : ''}
          </span>
        ))}
      </span>
    );
  }

export default NullSpace;
  
import React from 'react';

function MatrixDisplay(props) {
  const { matrix } = props;

  return (
    <table className='matrix'>
      <tbody>
        {matrix.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={`${i}-${j}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MatrixDisplay;
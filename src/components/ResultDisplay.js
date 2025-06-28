import React from 'react';

function ResultDisplay({ result }) {
  return (
    <div className="result-display">
      <div>{result.weightMessage}</div>
      <hr />
      <div>{result.concentration}</div>
      <hr />
      <div>{result.dosage}</div>
    </div>
  );
}

export default ResultDisplay;
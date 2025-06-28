import React from 'react';

function UnitSelector({ selectedUnit, setUnit, disabled }) {
  return (
    <div className="unit-buttons">
      <button
        onClick={() => setUnit('pounds')}
        className={selectedUnit === 'pounds' ? 'selected' : ''}
        disabled={disabled}
      >
        Use Pounds
      </button>
      <button
        onClick={() => setUnit('kg')}
        className={selectedUnit === 'kg' ? 'selected' : ''}
        disabled={disabled}
      >
        Use Kilograms
      </button>
    </div>
  );
}

export default UnitSelector;
import React from 'react';

function DrugButton({ name, onClick, selected, disabled }) {
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <button
      onClick={onClick}
      className={selected ? 'selected-drug' : ''}
      disabled={disabled}
    >
      {label}
    </button>
  );
}

export default DrugButton;
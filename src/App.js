import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import UnitSelector from './components/UnitSelector';
import DrugButton from './components/DrugButton';
import ResultDisplay from './components/ResultDisplay';
import { calculateDosage } from './utils/dosageCalculations';

const drugs = ['meloxicam', 'metoclopramide', 'cisapride', 'gabapentin', 'fluids'];

function App() {
  const [unit, setUnit] = useState(null);
  const [weightInput, setWeightInput] = useState('');
  const [selectedDrug, setSelectedDrug] = useState('');
  const [result, setResult] = useState(null);
  const [locked, setLocked] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCalculate = (drug) => {
    const weight = parseFloat(weightInput);
    if (!unit || !weight || weight <= 0) return;

    const kg = unit === 'kg' ? weight : weight * 0.45359237;
    const result = calculateDosage(drug, weight, kg, unit);
    setSelectedDrug(drug);
    setResult(result);
    setLocked(true);
  };

  const handleReset = () => {
    setUnit(null);
    setWeightInput('');
    setSelectedDrug('');
    setResult(null);
    setLocked(false);
    inputRef.current?.focus();
  };

  return (
    <div className="container">
      <h1>
        <img src="/assets/bunny-icon.png" alt="Rabbit icon" style={{ height: '60px', verticalAlign: 'middle', marginRight: '10px' }} />
        Rabbit Med Dosages
      </h1>
      {/* <h1>Rabbit Med Dosages</h1> */}
      <label htmlFor="weightInput">How much does your bunny weigh?</label>
      <input
        id="weightInput"
        ref={inputRef}
        type="number"
        value={weightInput}
        onChange={(e) => setWeightInput(e.target.value)}
        disabled={locked}
      />
      <UnitSelector selectedUnit={unit} setUnit={setUnit} disabled={locked} />
      <div className="drug-buttons">
        {drugs.map((drug) => (
          <DrugButton
            key={drug}
            name={drug}
            onClick={() => handleCalculate(drug)}
            selected={selectedDrug === drug}
            disabled={!unit || locked}
          />
        ))}
      </div>
      {result && <ResultDisplay result={result} />}
      {locked && <button className="reset-button" onClick={handleReset}>Reset</button>}
    </div>
  );
}

export default App;
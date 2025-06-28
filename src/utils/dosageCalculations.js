export function calculateDosage(drug, inputWeight, kg, unit) {
    let concentration = '';
    let dosage = '';
  
    switch (drug) {
      case 'meloxicam':
        concentration = 'Meloxicam 3mg/ml';
        const lowMelo = (kg * 0.3 / 3).toFixed(2);
        const highMelo = (kg * 0.6 / 3).toFixed(2);
        dosage = `Between ${lowMelo} and ${highMelo} ml, 2x per day`;
        break;
      case 'metoclopramide':
        concentration = 'Metoclopramide 1mg/ml';
        dosage = `${(kg * 0.5 / 1).toFixed(2)} ml, 2x per day`;
        break;
      case 'cisapride':
        concentration = 'Cisapride 10mg/ml';
        dosage = `${(kg * 0.5 / 10).toFixed(2)} ml, 2x per day`;
        break;
      case 'gabapentin':
        concentration = 'Gabapentin 50mg/ml';
        dosage = `${(kg * 0.5 / 50).toFixed(2)} ml, 2x per day`;
        break;
      case 'fluids':
        concentration = 'Fluids 45ml/kg';
        dosage = `${(kg * 45).toFixed(2)} ml total`;
        break;
      default:
        break;
    }
  
    const weightMessage = unit === 'kg'
      ? `Your Bunny weighs ${kg.toFixed(2)} kilograms`
      : `Your Bunny weighs ${inputWeight} pounds, which is ${kg.toFixed(2)} kilograms`;
  
    return {
      weightMessage,
      concentration: `Drug Concentration: ${concentration}`,
      dosage: `${capitalize(drug)} Dosage: ${dosage}`,
    };
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
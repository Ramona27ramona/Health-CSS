function validatePatientData(patient) {
  // Validation
  if(!patient.nume) {
   throw new Error('Please provide a value for field "nume".');
  }
  if(!patient.prenume) { 
    throw new Error('Please provide a value for field "prenume".');
  }
  if(!patient.adresa) { 
    throw new Error('Please provide a value for field "adresa".');
  }
  if(!patient.medicamentatie) { 
    throw new Error('Please provide a value for field "medicamentatie".');
  }
  if(!patient.istoricBolii) { 
    throw new Error('Please provide a value for field "istoric_al_bolii".');
  }
  if(!patient.dataNasterii) { 
    throw new Error('Please provide a value for field "data nasterii".');
  }
}

function validateUpdatePatient(patient) {
    console.log('patient: ', patient);
    if(!patient._id) {
        throw new Error('Please provide a value for field "id".');
    }
}

module.exports = {
    validatePatientData,
    validateUpdatePatient,
};

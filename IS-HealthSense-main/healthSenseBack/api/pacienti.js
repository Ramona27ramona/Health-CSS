const express = require('express');
const router = express.Router();

const { 
  retrievePacienti,
  insertPacienti,
  addNewPatient,
  updatePatient,
  deletePatient,
  retrievePatient,
} = require('../services/pacientiService');

const { validatePatientData, validateUpdatePatient } = require('./utils/pacientsUtils');

// router.get('/save', async (req, res) => {
//   const pacienti = await insertPacienti();
//   res.send({
//     data: pacienti
//   });
// });

router.get('/pacienti', async (req, res) => {
  const pacienti = await retrievePacienti();
  res.send({
    data: pacienti
  });
});

router.post('/pacient', async (req, res) => {
  const newPatient = req.body;
  console.log(req.body);

  try {
    validatePatientData(newPatient)
  } catch(error) {
    res.status(400).json({ message: error.message });
    return;
  }

  const result = await addNewPatient(newPatient);
  res.status(201).json({ message: 'Patient added successfully', patient: result });
});

router.put('/pacient', async (req, res) => {
  const idPatient = req.body._id;
  try {
    validateUpdatePatient(req.body)
  } catch(error) {
    res.status(400).json({ message: error.message });
    return;
  }

  console.log(req.body);
  const myObject = req.body;
  delete myObject._id; 
  const result = await updatePatient(idPatient, { ...myObject });

  res.send(result);
});

router.delete('/pacient/:_id', async (req, res) => {
  console.log(req.params._id);
  const result = await deletePatient(req.params._id);
  res.send(result);
});

router.get('/pacient/:_id', async (req, res) => {
  const patient = await retrievePatient(req.params._id);
  res.send({
    data: patient
  });
});


module.exports = router;
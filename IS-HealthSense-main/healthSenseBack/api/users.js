const express = require('express');
const router = express.Router();

const { 
    insertUsers,
    checkUser,
    addNewUser,
    logInUser
  } = require('../services/usersService');

  const { validateUserData, validateLogin } = require('./utils/usersUtils');

// router.get('/save-users', async (req, res) => {
//   const users = await insertUsers();
//   res.send({
//     data: users
//   });
// });

router.post('/signup', async (req, res) => {
    const newUser = req.body;

    try {
        validateUserData(newUser)
    } catch(error) {
      res.status(400).json({ message: error.message });
      return;
    }
  
    const userExists = await checkUser(newUser.user);
    if (userExists) {
        res.status(409).send('Utilizatorul deja exista');
        return;
    }

    const result = await addNewUser(newUser);
    res.status(201).json({ 'user': newUser.user, 'status': newUser.status });
});

router.post('/login', async (req, res) => {
    try {
      validateLogin(req.body)
    } catch(error) {
      res.status(400).json({ message: error.message });
      return;
    }

    const result = await logInUser(req.body);
    if(result?.user) {
    } else {
      res.status(400).send('There is no such user');
      return;
    }
    
    res.send(result);
    return;
  });

module.exports = router;
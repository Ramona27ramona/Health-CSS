function validateUserData(user) {
    // Validation
    if(!user.user) {
     throw new Error('Please provide a value for field "user".');
    }
    if(!user.password) { 
      throw new Error('Please provide a value for field "password".');
    }
    if(!user.status) { 
      throw new Error('Please provide a value for field "status".');
    }
  }
function validateLogin(user) {
  if(!user.user) {
    throw new Error('Please provide a value for field "user".');
   }
   if(!user.password) { 
     throw new Error('Please provide a value for field "password".');
   }
}

  module.exports = {
    validateUserData,
    validateLogin,
};
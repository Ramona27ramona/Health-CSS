function validateConsultatietData(consultatie) {
    // Validation
    if(!consultatie.nume) {
     throw new Error('Please provide a value for field "nume".');
    }
    if(!consultatie.prenume) { 
      throw new Error('Please provide a value for field "prenume".');
    }
    if(!consultatie.adresa) { 
      throw new Error('Please provide a value for field "adresa".');
    }
    if(!consultatie.dataNasterii) { 
      throw new Error('Please provide a value for field "data nasterii".');
    }
    if(!consultatie.loculConsultatie) { 
        throw new Error('Please provide a value for field "Locul unde va avea loc consultatia".');
    }
    if(!consultatie.oraConsultatie) { 
        throw new Error('Please provide a value for field "ora la care va fi consultatia".');
    }
    if(!consultatie.dataConsultatie) { 
        throw new Error('Please provide a value for field "ora la care va fi consultatia".');
    }
  }
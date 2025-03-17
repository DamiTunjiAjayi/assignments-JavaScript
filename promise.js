function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({
          status: 200,
          body: 'success',
        });
      } else {
        reject(new Error('The API is not working'));
      }
    });
  }
  
  // Example usage:
  getFullResponseFromAPI(true)
    .then((response) => {
      console.log('Promise resolved:', response);
    })
    .catch((error) => {
      console.log('Promise rejected:', error.message);
    });
  
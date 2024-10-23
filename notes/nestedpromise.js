


//nested
promise1.then((result1) => {
    console.log(result1);
    return promise2.then((result2) => {
      console.log(result2);
    });
  });



  //chaining
  promise1.then((result1) => {
    console.log(result1);
    return promise2;
  })
  .then((result2) => {
    console.log(result2);
  });

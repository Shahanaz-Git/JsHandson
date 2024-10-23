// Simulating asynchronous functions with setTimeout
function fetchData1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error in fetchData1");
      }, 2000);  // Rejects after 2 seconds
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from fetchData2");
      }, 1000);  // Resolves after 1 second
    });
  }
  
  function fetchData3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from fetchData3");
      }, 3000);  // Resolves after 3 seconds
    });
  }
  
  // Using Promise.any() to get the first successful promise
  async function getData() {
    try {
      const result = await Promise.any([fetchData1(), fetchData2(), fetchData3()]);
      console.log(result);  // Logs the result from fetchData2 (first resolved promise)
    } catch (error) {
      console.error("All promises rejected", error);
    }
  }
  
  // Call the async function
  getData();
  //output : Data from fetchData2

  // Simulating asynchronous functions with setTimeout
function fetchData4() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error in fetchData4");
      }, 1000);  // Rejects after 1 second
    });
  }
  
  function fetchData5() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error in fetchData5");
      }, 2000);  // Rejects after 2 seconds
    });
  }
  
  function fetchData6() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Error in fetchData6");
      }, 3000);  // Rejects after 3 seconds
    });
  }
  
  // Using Promise.any() to handle rejected promises
  async function getData1() {
    try {
      const result = await Promise.any([fetchData1(), fetchData2(), fetchData3()]);
      console.log(result);
    } catch (error) {
      console.error("All promises rejected", error);  // Catch block is executed
    }
  }
  
  // Call the async function
  getData1();
  //output : All promises rejected AggregateError: All promises were rejected
  


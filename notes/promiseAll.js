// Simulating asynchronous functions with setTimeout
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from fetchData1");
      }, 2000);  // Resolves after 2 seconds
    });
  }
  
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data from fetchData2");
      }, 1000);  // Resolves after 1 second
    });
  }
  
  // Async function to run both methods concurrently
  async function getData() {
    console.log("Fetching data...");
  
    // Start both fetches concurrently and wait for both to complete
    const [result1, result2] = await Promise.all([fetchData1(), fetchData2()]);
  
    console.log(result1); // Logs data from fetchData1 (after 2 seconds)
    console.log(result2); // Logs data from fetchData2 (after 1 second)
  
    console.log("Data fetched successfully!");
  }
  
  // Call the async function
  getData();
  
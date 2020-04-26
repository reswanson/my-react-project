// Function to be called from componentWillunmount to clean 

function Shutdown() {
  console.log("...SHUTDOWN")
  console.log("--Cleaning up on shutdown")
  setTimeout(() => {  console.log("byebye!"); }, 5000);

  
}

export default Shutdown;

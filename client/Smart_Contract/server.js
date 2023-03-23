const express = require("express");
const path = require("path");
const app = express(); 
app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname + "/index.html"));
}) 
const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`port is open on ${portNumber}`);

// const main = async () => {
//     const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
//     const transactionsContract = await transactionsFactory.deploy();
  
//     await transactionsContract.deployed();
  
//     console.log("Transactions address: ", transactionsContract.address);
//   };
  
//   const runMain = async () => {
//     try {
//       await main();
//       process.exit(0);
//     } catch (error) {
//       console.error(error);
//       process.exit(1);
//     }
//   };
  
//   runMain();
const hre = require("hardhat");
const Library = require("../artifacts/contracts/Library.sol/Library.json");

const run = async function () {
  const provider = new hre.ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );

  const wallet = new hre.ethers.Wallet(
    "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
    provider
  );
  const balance = await wallet.getBalance();
  console.log(hre.ethers.utils.formatEther(balance, 18));

  const contractAddress = "0x3505a02BCDFbb225988161a95528bfDb279faD6b";

  // slot 0 - count
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    0,
    console.log
  );
  // slot 1 - u16, isTrue, owner
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    1,
    console.log
  );
  // slot 2 - password
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    2,
    console.log
  );

  // slot 6 - array length
  getArrayLocation(6, 0, 2);
  web3.utils.numberToHex(
    "111414077815863400510004064629973595961579173665589224203503662149373724986687"
  );
  // Note: We can also use web3 to get data location
  web3.utils.soliditySha3({ type: "uint", value: 6 });
  // 1st user
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f",
    console.log
  );
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d40",
    console.log
  );
  // Note: use web3.toAscii to convert bytes32 to alphabet
  // 2nd user
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d41",
    console.log
  );
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    "0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d42",
    console.log
  );

  // slot 7 - empty
  getMapLocation(7, 1);
  web3.utils.numberToHex(
    "81222191986226809103279119994707868322855741819905904417953092666699096963112"
  );
  // Note: We can also use web3 to get data location
  web3.utils.soliditySha3(
    { type: "uint", value: 1 },
    { type: "uint", value: 7 }
  );
  // user 1
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b828",
    console.log
  );
  web3.eth.getStorageAt(
    "0x3505a02BCDFbb225988161a95528bfDb279faD6b",
    "0xb39221ace053465ec3453ce2b36430bd138b997ecea25c1043da0c366812b829",
    console.log
  );
};

run();

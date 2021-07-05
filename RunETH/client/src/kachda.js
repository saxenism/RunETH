
  function uploadToIPFS() {
    var input = document.getElementById('file-path');
    var label = document.getElementById('file-text');
    if(input.files.length > 0) {
      label.textContent = input.files[0].mozFullPath;
    } else {
      label.textContent = "Select a file";
    }
  }


  import {ethers} from 'ethers';

  const contractABI =  [{"inputs":[{"internalType":"contract DInterest","name":"pool","type":"address"},{"internalType":"uint64","name":"fundingID","type":"uint64"}],"name":"accruedInterestOfFunding","outputs":[{"internalType":"uint256","name":"fundingInterestAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DInterest","name":"pool","type":"address"},{"internalType":"uint64","name":"fundingID","type":"uint64"}],"name":"fundingIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract DInterest","name":"pool","type":"address"},{"internalType":"uint64","name":"depositID","type":"uint64"}],"name":"surplusOfDeposit","outputs":[{"internalType":"bool","name":"isNegative","type":"bool"},{"internalType":"uint256","name":"surplusAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DInterest","name":"pool","type":"address"}],"name":"totalInterestOwedToFunders","outputs":[{"internalType":"uint256","name":"interestOwed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract DInterest","name":"pool","type":"address"},{"internalType":"uint64","name":"depositID","type":"uint64"},{"internalType":"uint256","name":"virtualTokenAmount","type":"uint256"}],"name":"withdrawableAmountOfDeposit","outputs":[{"internalType":"uint256","name":"withdrawableAmount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"}],"stateMutability":"view","type":"function"}];

  const contractAddress = "0x1BBeA3Fa282dc0199E7dCea34E152FA955fd3c21";

  async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
  }
  let year_in_seconds = 31556952;
  async function fun() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      try {
        const data = await provider.accruedInterestOfFunding();
        console.log('data: ', data);
        alert('data: ', data);
      } catch (err) {
        console.log('Error: ', err);
        alert('Error: ', err);
      }
    }
  }

  async function fun2() {
    if(typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      try {
        const data = await contract.accruedInterestOfFunding(5000813165000000000, year_in_seconds);
        console.log('data: ', data);
      } catch(err) {
        console.log('Error: ', err);
        alert("Error!!");
      } 
    }
  }

<script>
  import {ethers,utils} from 'ethers';
  
let contractAddress = "0x2F196A114c588547FDF9a226516D844a9Ead3C53";
let contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "paisaDo",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
];

async function requestAccount() {
    await window.ethereum.request({method: 'eth_requestAccounts'});
  }

async function depositStake() {
  if(typeof window.ethereum !== 'undefined') {
    await requestAccount();
	await new Promise(r => setTimeout(r, 6000));
	alert(`You've now locked 1000 cDAI with RunETH`);
  }
}

let name = '';
let twtHandle = '';
let challengeDetails = '';
let startDate;
let stakedAmount;

</script>

<div class="bg-gray-800 py-32 px-10 min-h-screen ">
    <div class="mt-4 mb-4">
        <h2 class="text-3xl text-center text-green-300">🏋️ Furbish your details 🥊</h2>
    </div>
    <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto">
  
      <form>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label for="name" class="inline-block w-20 mr-6 text-right font-bold text-green-300"> 
              Name
          </label>
          <input type="text" placeholder="Name (an alias would also be fine)" bind:value={name}
                 class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                        text-gray-900 placeholder-gray-400
                        outline-none">
        </div>
  
        <div class="flex items-center mb-5">
          <label for="twtHandle" class="inline-block w-20 mr-6 text-right font-bold text-green-300">
              Twitter
          </label>
          <input type="text" placeholder="Your Twitter Handle" bind:value={twtHandle}
                 class="flex-1 py-2 border-b-2 border-gray-400  
                        text-gray-900
                        placeholder-gray-400">  <!-- check other class spec upper section -->
        </div>

        <div class="flex items-center mb-5">
          <label for="startDate" class="inline-block w-20 mr-6 text-right font-bold text-green-300">
              Start Date
          </label>
          <input type="date" placeholder="Starting Date for Challenge" bind:value={startDate}
                 class="flex-1 py-2 border-b-2 border-gray-400  
                        text-gray-900
                        placeholder-gray-400">  <!-- check other class spec upper section -->
        </div>

        <div class="flex items-center mb-5">
          <label for="stakedAmount" class="inline-block w-20 mr-6 text-right font-bold text-green-300">
              Staked Amount
          </label>
          <input type="number" placeholder="Minimum 100 DAI" min = 100 max=500000 bind:value={stakedAmount}
                 class="flex-1 py-2 border-b-2 border-gray-400  
                        text-gray-900
                        placeholder-gray-400">  <!-- check other class spec upper section -->
        </div>
  
        <div class="flex items-center mb-5">
            <label for="challengeDetails" class="inline-block w-20 mr-6 text-right font-bold text-green-300">
                Challenge Details
            </label>
            <textarea placeholder="Please enter details of the fitness commitment you are undertaking..." bind:value={challengeDetails}  class="flex flex-1 py-2 border-b-2 border-gray-400  
            text-gray-900
            placeholder-gray-400"></textarea>
        </div>
        
        <div class="text-right">
          <button  type="button"
            class="py-3 px-8 bg-green-400 text-white font-bold"
            on:click={depositStake} >
                Submit
            </button> 
        </div>
      </form>
    </div>
  </div>
  



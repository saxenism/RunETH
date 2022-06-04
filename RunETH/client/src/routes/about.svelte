<script>
	import api from '../../api.js';
	import axios from 'axios';
	import { ethers } from 'ethers';

	let isAutheticated = true;

    async function getProofs() {
        try {
            let response = await axios.get(api.proofs);
            console.log(response.data);
        } catch(err) {
            console.log(err);
        }
    }

	async function uploadFileToIPFS() {
		try{
			let uploadFile = await axios.post(api.proofs, {
				filePathClient: "C:\\Users\\Rahul\\Desktop\\Articles_musings\\zoom_bkg.png",
				nameClient: "Naruto-About",
			});
			if(uploadFile.status === 200) {
				console.log(uploadFile);
				console.log(uploadFile.data.IpfsHash);
			}
		} catch(err) {
			console.log(err);
		}
	}

	async function checkAuthentication() {
		try {
			let response = await axios.get(api.testAuthentication);
			console.log(response);
			if (response.data.authenticated) {
				isAutheticated = true;
			}
		} catch (err) {
			console.log(err);
		}
	}

    async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const yourAddress = await signer.getAddress();
        alert(yourAddress);
    }
</script>

<body class="bg-gray-800">
	<h3 class="text-6xl text-center my-8 text-green-300">What is RunETH?</h3>
	<h2 class="text-2xl text-center mt-8 text-green-300">
		❤️Leverage the power of global accountability group and blockchain to form positive habits ❤️
	</h2>
</body>

<!-- 
<button class="flex mx-auto text-sm px-4 py-3 leading-none border rounded text-green-300 
border-green-100 hover:border-transparent hover:text-white hover:bg-green-300 mt-4 md:mt-0" 
on:click={uploadFileToIPFS}>
	Upload File to IPFS
</button>
{#if isAutheticated}
	<h3 class="text-6xl text-center my-8 text-green-300">Authenticated</h3>
{:else}
	<h3 class="text-6xl text-center my-8 text-green-300">Not Authenticated</h3>
{/if} -->

<script context="module">
    import {ethers} from 'ethers';
    import api from '../../api.js';
	import axios from 'axios';

    export async function load({page}) {
        try {
            let response = await axios.get(api.proofs);
            return {props: {response}};
        } catch (error) {
            console.log(err);
        }
    }
</script>

<script>
    export let response;
    let filePathClient = String.raw``;
    let nameClient = String.raw``;

	async function uploadFileToIPFS() {
		try{
			let uploadFile = await axios.post(api.proofs, {
				filePathClient: filePathClient,
				nameClient: nameClient,
			});
			console.log(uploadFile);
		} catch(err) {
			console.log(err.response.data);
		}
        document.getElementById("uploadForm").reset();
	}

    let uploadedPins = response.data.rows;
</script>
<svelte:head>
    <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
</svelte:head>
<main class="bg-gray-800">
    <div class="mt-8 mb-4">
        <h2 class="text-3xl text-center text-green-300 uppercase">&#127775; Upload workout proof &#127775;</h2>
    </div>
    <div class="bg-white p-10 md:w-3/4 lg:w-1/2 mx-auto my-8 divide-y">
        <form id="uploadForm">
            <div class="flex items-center mb-5">
                <!--         tip - here neede inline-block , but why? -->
                <label for="fileNameClient" class="inline-block w-20 mr-6 text-right font-bold text-green-300"> 
                    File Path
                </label>
                <input type="text" placeholder="FilePath (escape the slashes)" bind:value={filePathClient}
                    class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-900 placeholder-gray-400
                            outline-none">
            </div>
            <div class="flex items-center mb-5">
                <!--         tip - here neede inline-block , but why? -->
                <label for="nameClient" class="inline-block w-20 mr-6 text-right font-bold text-green-300"> 
                    File Name
                </label>
                <input type="text" placeholder="Name your file (optional)" bind:value={nameClient}
                    class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                            text-gray-900 placeholder-gray-400
                            outline-none">
            </div>
            <div class="text-center">
                <button type = "button"
                  class="py-3 px-8 bg-green-400 text-white font-bold"
                  on:click={uploadFileToIPFS}>
                      Upload
                  </button> 
              </div>
        </form>
    </div>
    <div class="mt-8 mb-4">
        <h2 class="text-3xl text-center text-green-300 uppercase">{response.data.count} Uploaded Proofs &#127919;</h2>
    </div>
    {#each uploadedPins as pin, index}
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b 
            text-teal-900 px-4 py-3 shadow-md border rounded mx-8 my-4" role="alert">
            <div class="flex">
                <div class="py-4 flex-col justify-items-center"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                    <div>
                        <p class="font-bold">{index+1}</p>
                        <p class="text-sm">Name: {pin.metadata.name}</p>
                        <p class="text-sm">View: https://gateway.pinata.cloud/ipfs/{pin.ipfs_pin_hash} </p>
                        <p class="text-sm">Date Pinned: {pin.date_pinned}</p>
                        <br/>
                        <!-- <button href="/mintNFT"
                            class="py-3 px-8 bg-green-400 text-white font-bold" >
                            Mint NFT
                        </button> -->
                        <a
                        href="/mintNFT"
                        class="inline-block text-base px-4 py-2 leading-none border rounded bg-green-400 text-gray-900 border-white hover:border-transparent hover:text-white hover:bg-green-300 mt-4 md:mt-0"
                        >
                        Mint NFT
                      </a>
                    </div>
            </div>
        </div>
    {/each}
</main>

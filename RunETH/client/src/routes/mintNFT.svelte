<script>
    let address;
    let tokenID
</script>

<div class="bg-gray-800 py-32 px-10 min-h-screen ">
    <div class="mt-4 mb-4">
        <h2 class="text-3xl text-center text-green-300">Rarible Item Indexer</h2>
    </div>
    <form>

        <div class="flex items-center mb-5">
          <!--         tip - here neede inline-block , but why? -->
          <label for="address" class="inline-block w-20 mr-6 text-right font-bold text-green-300"> 
              Contract Address
          </label>
          <input type="text" placeholder="Contract Address" bind:value={address}
                 class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                        text-gray-900 placeholder-gray-400
                        outline-none">
        </div>

        <div class="flex items-center mb-5">
            <!--         tip - here neede inline-block , but why? -->
            <label for="tokenID" class="inline-block w-20 mr-6 text-right font-bold text-green-300"> 
                TokenID
            </label>
            <input type="text" placeholder="Token ID" bind:value={tokenID}
                   class="flex-1 py-2 border-b-2 border-gray-400 focus:border-green-400 
                          text-gray-900 placeholder-gray-400
                          outline-none">
          </div>
          <div class="text-right">
            <button  type="button"
              class="py-3 px-8 bg-green-400 text-white font-bold"
               >
                 Get Item
              </button> 
          </div>
    </form>
</div>

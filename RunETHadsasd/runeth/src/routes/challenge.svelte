<script>
    let name = '';
    let twtHandle = '';
    let challengeDetails = '';

    function test() {
        if(name === '') {
            alert('Form to bharo loduchand 🤬');
        }
    }
</script>

<div class="bg-gray-800 py-32 px-10 min-h-screen ">
    <div class="mt-4 mb-4">
        <h2 class="text-2xl text-center text-green-300">🏋️ Furbish your details 🥊</h2>
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
                        text-green-300 placeholder-gray-400
                        outline-none">
        </div>
  
        <div class="flex items-center mb-5">
          <label for="twtHandle" class="inline-block w-20 mr-6 text-right font-bold text-green-300">
              Twitter
          </label>
          <input type="text" placeholder="Your Twitter Handle" bind:value={twtHandle}
                 class="flex-1 py-2 border-b-2 border-gray-400  
                        text-green-300
                        placeholder-gray-400">  <!-- check other class spec upper section -->
        </div>
  
        <div class="flex items-center mb-5">
            <label for="challengeDetails" class="inline-block w-20 mr-6 text-right font-bold text-green-300">
                Challenge Details
            </label>
            <textarea placeholder="Please enter details of the fitness commitment you are undertaking..." bind:value={challengeDetails}  class="flex flex-1 py-2 border-b-2 border-gray-400  
            text-green-300
            placeholder-gray-400"></textarea>
          </div>

        <div class="text-right">
          <button 
            class="py-3 px-8 bg-green-400 text-white font-bold"
            on:click={test}  >
                Submit
            </button> 
        </div>
  
      </form>
    </div>
  </div>
  
  

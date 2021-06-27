<script>
    async function requestAccount() {
        await window.ethereum.request({method: 'eth_requestAccounts'});
    }
</script>

<nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
    <div class="flex items-center flex-shrink-0 text-green-100 mr-10">
        <span class="font-bold text-xl">RunETH</span>
    </div>

    <div class="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
            <a
                href="/"
                class="block mt-4 sm:inline-block sm:mt-0 text-green-300 hover:text-white mr-4"
            >
                Home
            </a>
            <a 
                href="/about"
                class="block mt-4 sm:inline-block sm:mt-0 text-green-300 hover:text-white mr-4"
            >
                About
            </a>
            <a 
            href="/challenge"
            class="block mt-4 sm:inline-block sm:mt-0 text-green-300 hover:text-white mr-4"
            >
                Commit Now
            </a>
        </div>
        <div>
            <a
              href="/challenge"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-green-300 border-green-100 hover:border-transparent hover:text-white hover:bg-green-300 mt-4 md:mt-0"
              on:click={requestAccount}
              >
              Connect Wallet
            </a>
          </div>
    </div>
</nav>


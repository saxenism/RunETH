<script>
    let cards;
    cards = [
        {
            title: "Perry Williams | Twitter: @williamPerry1",
            excerpt: "Daily swimming for 30 days straight with a minimum of 15 laps of an Olympic size pool. Proof will be given by my smart watch fitness app.",
            date: "1,500 DAI",
            author: "Staked Amount",
            img: "https://randomuser.me/api/portraits/men/77.jpg"
        },  {
            title: "Jun Ji-hyun | Twitter: @koreaJunJi",
            excerpt: "Daily cycling for the next 100 days. Minimum of 5kms daily. Proofs will be uploaded by my smart phone fitness app.",
            date: "private",
            author: "Staked Amount",
            img: "https://randomuser.me/api/portraits/women/2.jpg"
        }, 
        {
            title: "Dave Coolwater | Twitter: @dave_cw",
            excerpt: "Daily pushups for the next 100 days straight. Will probably mix in some calisthenics. I will upload compressed time lapse videos as proofs.",
            date: "5,000 USDT",
            author: "Staked Amount",
            img: "https://randomuser.me/api/portraits/men/54.jpg"
        },{
            title: "Martha Simons | Twitter: @iAmMarthaS",
            excerpt: "Some form of verifiable physical activity for the next 90 days",
            date: "500 USDC",
            author: "Staked Amount",
            img: "https://randomuser.me/api/portraits/women/21.jpg"
        } 
    ]

  function getRndInteger() {
    const max = 100;
    const min = 1;
    return Math.floor(Math.random() * (max - min) ) + min;
  }

</script>

<div class="pt-6 pb-12 bg-gray-800">  
    <div id="card" class="">
      <h2 class="text-center font-serif text-green-300 text-4xl xl:text-5xl">&hearts; RunETH Commitments &hearts;</h2>
      <!-- container for all cards -->
      <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
        <!-- card -->
        {#each cards as card, i}
        <div class="flex flex-col md:flex-row overflow-hidden
                                          bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
          <!-- media -->
          <div class="h-64 w-auto md:w-1/2">
            <img class="inset-0 h-full w-full object-cover object-center"  src={card.img} alt="Warning dena band karo bakchod!" />
          </div>
          <!-- content -->
          <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
            <h3 class="font-semibold text-lg leading-tight truncate">{ card.title }</h3>
            <p class="mt-2">
              { card.excerpt }
            </p>
            <div class="relative pt-1">
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                    Task in progress
                  </span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold inline-block text-pink-600">
                    Streak Continued
                  </span>
                </div>
              </div>
              <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                <div style="width:{(((i+1)*35) + (i*20))%80}%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
              </div>
            </div>
            <p class="text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
              { card.author } &bull; { card.date }
            </p>
          </div>
        </div>
        {/each}<!--/ card-->
      </div><!--/ flex-->
    </div>
  </div>
  
  
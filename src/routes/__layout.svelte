<script>
  import "../app.css";
	import { page } from '$app/stores';
</script>


<div class="container flex mx-auto my-8 h-full">
  <div class="mr-8">
    <div class="w-[250px] bg-zinc-900 rounded-xl p-4 flex-shrink-0">
      <img class="w-[50px] rounded-full" src="salt_logo.png" />

      <div class="mt-8 text-lg">
        <div class="py-2" class:font-bold={$page.url.pathname === '/'}>
          My Requests
        </div>
        
        <div class="py-2">
          Free Templates
        </div>

        <hr class="mt-4 py-2 opacity-30" />

        <div class="mt-2 text-sm opacity-80">Salt n Bold is a fast design studio built for startups 💙</div>
      </div>

    </div>

    <button class="mt-8 w-full">
      Get Custom Design
    </button>

    <button class="mt-4 w-full" style="background: none;">
      Refer a friend
    </button>
  </div>

  <div class="w-full">
    <slot />
  </div>
</div>

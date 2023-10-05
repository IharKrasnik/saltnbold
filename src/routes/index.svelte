<script>
  let services = [
    { name: 'Landing Page', description: 'Validate your product idea and grow waitlist', img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527198530-image.png' },
    { name: 'UI/UX Prototype', description: 'Pitch your product to users and investors', img: 'https://assets.website-files.com/64831da00244efd7c8280a6c/6501fa4c88cef88ac28330a7_image%202.png' },
    { name: 'Product Demo Video', description: 'Explain your product with dynamic video', img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528187173-image.png' },
    { name: 'Motion Animation', description: 'Win people attention with stunning animations', video: 'https://fra1.digitaloceanspaces.com/ship-app-assets/stream/rec4sLfwGXzHxLy54/1696528525428-motion.mp4' },
    { name: 'Pitch Deck', description: 'Convert your story into compelling pitch', img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696527520883-image.png' },
    { name: 'Logo & Brand', description: 'Differentiate and stand out from the crowd', img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528413760-image.png' },
    { name: 'Marketing Assets', description: 'Unify your marketing content and make it pop', img: 'https://ship-app-assets.fra1.digitaloceanspaces.com/stream/rec4sLfwGXzHxLy54/1696528869771-image.png' },
  ]
</script>

<h2 class="text-2xl font-bold mb-2">Hi! Need new designs?</h2>
<h3 class="mb-8">Choose the service your need and get it done super fast</h3>

<div class="grid grid-cols-3 w-full gap-4 w-full">
  {#each services as service}
    <div class="rounded-xl border border-slate-600 flex flex-col justify-between mb-4 transition hover:scale-105 cursor-pointer">
    
      {#if service.img}
        <img class="w-full rounded-t-xl cover-image" src="{service.img}" />
      {:else if service.video}
        <video class="cover-image" looped autoplay muted src="{service.video}"/>
      {/if}

      <div class="p-4">
        <div class="font-bold mb-2">{service.name}</div>
        
        <div class="opacity-80">{service.description}</div>
      </div>
    </div>
  {/each}
  
  <div class="rounded-xl border border-slate-600 flex flex-col mb-4 bg-[#2b65f9] flex flex-col justify-center items-center transition hover:scale-105 hover:bg-green-300 hover:text-black cursor-pointer">
    <div class="text-2xl">
      Get custom design
    </div>
  </div>
</div>

<style>
  .cover-image {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
</style>
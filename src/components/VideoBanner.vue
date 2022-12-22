<template>
    <div class="absolute top-0 left-0 w-full h-screen sm:h-[75vh] lg:h-screen overflow-hidden">
      <span class="bg-[#111827]/50 w-full h-screen sm:h-[75vh] lg:h-screen absolute z-10"></span>
      <video class="min-w-full min-h-full absolute object-cover bg-[#f0f3fc]" src="../assets/videos/center_banner.mp4" type="video/mp4" autoplay muted loop webkit-playsinline playsinline></video>
    </div>

    <div class="w-[100%] lg:w-[50%] flex flex-col px-6 lg:px-0 justify-center items-center absolute z-10">
      <div class="w-full flex flex-col justify-center items-center sm:items-start">
        <p class="text-white text-[14px] py-16">“I want to use the 3D photo modeling technology to keep the lovely appearance of my family forever. The way of image recording is still at the stage of 2D . Every time the cost and technology of one more dimension increasing is very tremendous and difficult. Light Matrix is committed to becoming a ‘Technology innovator of visual entertainment ’
, breaking through the visual framework and entering the next generation of shocking vision. ”said by Joe Chen, the CEO of Light Matrix.</p>

        <router-link class="btn" to="/about">Read More</router-link>
      </div>
    </div>
</template>
<template>
	<div class="relative bg-[#f0f3fc]">
	    <div class="relative w-full h-full flex flex-col justify-start items-center space-y-20 absolute -top-6 z-10">
	      <div class="w-[90%] lg:w-[50%] flex flex-col justify-center items-center">
	        <div class="relative w-full h-[360px] sm:h-[180px] bg-gradient-to-r from-cyan-500 to-[#4f46e5] flex items-center justify-center pl-0 sm:pl-12">
	          <span class="absolute sm:-left-20 lg:-left-28 -top-16 sm:-top-6 z-10">
	            <img src="@/assets/image/on_chain.png" alt="on_chain" class="w-[240px]">
	          </span>
	          <div class="w-[100%] lg:w-[60%] px-[1rem] pt-[6rem] sm:pt-0">
	            <p class="text-white text-[14px] text-center">The world's 1st high quality volumetric capture live broadcasting in metaverse.</p>
	          </div>
	        </div>
	      </div>

	      <div class="w-[90%] lg:w-[50%] flex flex-col justify-center items-center">
	        <div class="relative w-full h-[360px] sm:h-[180px] bg-gradient-to-r from-cyan-500 to-[#4f46e5] flex items-center justify-center pr-0 sm:pr-12">
	          <span class="absolute sm:-right-0 lg:-right-16 -top-16 sm:-top-6 z-10">
	            <img src="@/assets/image/metaverse.png" alt="metaverse" class="w-[240px]">
	          </span>
	          <div class="w-[100%] lg:w-[60%] px-[1rem] pt-[10rem] sm:pt-0">
	            <p class="text-white text-[14px] text-center">The world's 1st interactive 4D live broadcasting in commercial 5G network.</p>
	          </div>
	        </div>
	      </div>

	      <router-link class="btn" to="/solutions">Read More</router-link>

	    </div>
  	</div>
</template>
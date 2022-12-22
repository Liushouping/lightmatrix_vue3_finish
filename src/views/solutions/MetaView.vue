<script>
import { ref, onMounted } from 'vue'
import Footer from '@/components/Footer.vue'
export default {
  setup(){
    onMounted(()=> {
    });
    return {
    }
  },
  components: {
  	Footer,
  },
}
</script>
<template>
	<div class="relative w-full h-full bg-white">
		<span class="absolute top-0 bg-[#f0f3fc] w-full h-[800px] sm:h-[600px] z-0"></span>

		<div class="mt-[75px] flex flex-col items-center justify-center relative z-10 pb-0 pt-[6rem] lg:py-32">
			<div class="w-[75%] lg:w-[50%] flex flex-col lg:flex-row space-x-0 lg:space-x-12 space-y-6 lg:space-y-0">
				<img src="/image/slider_3.png" alt="Meta Studio" class="w-[120px] h-[100%] mx-auto">
				<div class="flex flex-col w-full lg:w-[80%] space-y-6 lg:space-y-4">
					<h5 class="text-center lg:text-left font-bold text-[24px] text-[#00A0E9]">Meta Studio</h5>
					<p class="text-center lg:text-left">3D Metaverse:Create a 3D Metaverse belonging to individuals and companies, enhance corporate identity with personal characteristics, combined diverse industries with art and cultural preservation, so that images can be transmitted across different time zones</p>
				</div>
			</div>
		</div>

		<div class="bg-white h-full flex flex-col justify-center items-center py-20">
			<div class="w-[90%] lg:w-[50%] flex flex-col space-y-12">
	      <vue3-video-player preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls 
	      src="/video/Meta/Meta Studio_01.mp4"></vue3-video-player>

	      <vue3-video-player preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls 
	      src="/video/Meta/Meta Studio_02.mp4"></vue3-video-player>

	      <vue3-video-player preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls 
	      src="/video/Meta/Meta Studio_03.mp4"></vue3-video-player>
	    </div>
		</div>

		<div class="flex flex-col items-center justify-center relative z-10 py-32">
			<div class="w-[90%] lg:w-[50%] flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0">
				<div class="flex flex-col w-full space-y-6 sm:space-y-4">
					<h5 class="text-center font-bold">3D Photography in Mobile Studio</h5>
					<p class="text-center">Increasing convenience and improving efficiency, not only for fixed shooting, mobile studio can be applied to education, public welfare and other related activities.</p>
				</div>
			</div>
		</div>

		<div class="bg-white h-full flex flex-col justify-center items-center py-20">
			<div class="w-[90%] lg:w-[50%] flex flex-col space-y-12">
	      <img src="@/assets/image/mobile01.png" alt="Meta Studio">
	      <img src="@/assets/image/mobile02.png" alt="Meta Studio">
	      <img src="@/assets/image/mobile03.jpeg" alt="Meta Studio">
	      <img src="@/assets/image/mobile04.jpeg" alt="Meta Studio">
	    </div>
		</div>

		<div class="flex flex-col items-center justify-center relative z-10 py-32">
			<div class="w-[90%] lg:w-[50%] flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0">
				<div class="flex flex-col w-full space-y-6 sm:space-y-4">
					<h5 class="text-center font-bold">4D Volummetric Capture Total Solution</h5>
					<ul class="mx-auto list-disc">
						<li>including studio and software/system</li>
						<li>Live broadcasting software license is optiona</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="bg-white h-full flex flex-col justify-center items-center py-20">
			<div class="w-[90%] lg:w-[50%] flex flex-col space-y-12">
	      <img src="@/assets/image/m01.png" alt="Meta Studio">
	      <img src="@/assets/image/m02.png" alt="Meta Studio">
	      <button class="mx-auto btn" @click="$router.back();">Back</button>
	    </div>
		</div>

	</div>
	<Footer />
</template>
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
				<img src="/image/slider_4.png" alt="Avatar Creator" class="w-[60px] h-[100%] mx-auto">
				<div class="flex flex-col w-full lg:w-[80%] space-y-6 lg:space-y-4">
					<h5 class="text-center lg:text-left font-bold text-[24px] text-[#00A0E9]">Avatar Creator</h5>
					<p class="text-center lg:text-left">4D Volummetric Capture :Improving the 3D modeling technology, reducing time-consuming of engineering operations, and leverage more time effectively to create greater benefits.</p>
				</div>
			</div>
		</div>

		<div class="w-[75%] mx-auto flex flex-col relative z-10 justify-center items-center space-y-12 sm:space-y-0 pt-20">
			<div class="flex flex-row justify-center items-center">
				<div class="w-1/2 flex justify-center items-center">
					<img src="@/assets/image/phone.png" alt="Avatar Creator" class="w-full lg:w-[70%]">
				</div>
				<div class="w-1/2 h-full flex justify-center items-center">
					<img src="@/assets/image/qrcode.svg" alt="qrcode">
				</div>
			</div>
			<div class="w-full flex flex-col justify-center items-center">
				<h5 class="text-center font-bold">3D Meta Car</h5>
				<p class="text-center">Break through the imagination to impress the customer through the 3D card, so that every card is full of surprises, unique and creative.</p>
			</div>
		</div>

		<div class="flex flex-col items-center justify-center relative z-10 py-32">
			<div class="w-[90%] lg:w-[50%] flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0">
				<div class="flex flex-col w-full space-y-6 sm:space-y-4">
					<p class="text-center">It can be used for on-site pre-recording, live broadcasting, and placing real people in 3D world to create exclusive personal and corporate metaverse images, which can be used for art, concerts, etc.</p>
				</div>
			</div>
		</div>

		<div class="bg-white h-full flex flex-col justify-center items-center py-20">
			<div class="w-[90%] lg:w-[50%] flex flex-col space-y-12">
	      <img src="@/assets/image/c1.jpg" alt="Avatar Creator">
	      <img src="@/assets/image/c2.jpg" alt="Avatar Creator">
	      <vue3-video-player preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls 
	      src="/video/Avatar/C3.mp4"></vue3-video-player>
	    </div>
		</div>

		<div class="flex flex-col items-center justify-center relative z-10 py-32">
			<div class="w-[90%] lg:w-[50%] flex flex-col sm:flex-row space-x-0 sm:space-x-12 space-y-6 sm:space-y-0">
				<div class="flex flex-col w-full space-y-6 sm:space-y-4">
					<p class="text-center">Preserving digital archive, shooting with precise and exclusive calculations and graphics, so that the physical objects can be scanned in 3D image, as same as personal experience , and can be combined with online and offline exhibitions.</p>
				</div>
			</div>
		</div>

		<div class="bg-white h-full flex flex-col justify-center items-center py-20">
			<div class="w-[90%] lg:w-[50%] flex flex-col space-y-12">
	      <img src="@/assets/image/AvatarCreator_02.jpg" alt="Avatar Creator">
	      <img src="@/assets/image/AvatarCreator_03.jpg" alt="Avatar Creator">
	      <img src="@/assets/image/AvatarCreator_04.jpg" alt="Avatar Creator">
	      <img src="@/assets/image/AvatarCreator_05.jpg" alt="Avatar Creator">
	      <vue3-video-player preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls 
	      src="/video/Avatar/AvatarCreator_en01.mp4"></vue3-video-player>
	      <vue3-video-player preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls 
	      src="/video/Avatar/city.mp4"></vue3-video-player>
	      <button class="mx-auto btn" @click="$router.back();">Back</button>
	    </div>
		</div>

	</div>
	<Footer />
</template>
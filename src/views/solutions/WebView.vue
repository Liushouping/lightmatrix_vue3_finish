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
				<img src="/image/slider_6.png" alt="WEB 3.0" class="w-[120px] h-[100%] mx-auto">
				<div class="flex flex-col w-full lg:w-[80%] space-y-6 lg:space-y-4">
					<h5 class="text-center lg:text-left font-bold text-[24px] text-[#00A0E9]">WEB3.0</h5>
					<p class="text-center lg:text-left">Immersive theater, as if you are in the scene to participate in activities, can be applied to exhibitions, entertainment, competitions, art and culture and other performances.</p>
				</div>
			</div>
		</div>

		<div class="bg-white h-full flex flex-col justify-center items-center py-20">
			<div class="relative w-[90%] lg:w-[50%] flex flex-col space-y-12">
	      <iframe src="https://lm3d.s3.ap-northeast-1.amazonaws.com/museum/index.html" width="100%" height="720px"></iframe>
	      <iframe src="https://lm3d.s3.ap-northeast-1.amazonaws.com/concertLive/index.html?source=TaiwaneseOpera2" width="100%" height="720px"></iframe>
	      <button class="mx-auto btn" @click="$router.back();">Back</button>
	    </div>
		</div>
	</div>
	<Footer />
</template>
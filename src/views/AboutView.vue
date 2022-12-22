<script>
import AboutFooter from '../components/AboutFooter.vue'
export default {
  setup(){
    return {
    }
  },
  components: {
  	AboutFooter
  },
}
</script>
<template>
	<div 
	@mousewheel.prevent
  @touchmove.prevent
	class="relative w-full h-screen bg-[#f0f3fc] flex overflow-hidden">
		<div class="max-w-[75%] w-full mx-auto flex flex-row pb-[90px] sm:pb-0">
			<div class="w-full h-full lg:w-1/2 flex flex-col justify-center items-start z-20">
				<h2 class="font-bold text-[36px] xs:text-[42px] lg:text-[56px] tracking-[10px] xs:tracking-[12px]">ABOUT US</h2>
				<p class="text-left text-[14px]">Light Matrix is a technology provider with the best integration of software and hardware. We are the 4D imaging technology company dedicated to the preservation and application. Through years of development, we will open the new era of next new generation of visual entertainment and image preservation.</p>
			</div>
			<div class="w-1/2 h-full flex justify-center items-end fixed lg:relative bottom-[90px] right-0 z-10 opacity-10 lg:opacity-100">
				<img src="@/assets/image/light_blue.png" alt="LightMatrix logo" class="w-[100%]">
			</div>
		</div>
		<AboutFooter />
	</div>
</template>


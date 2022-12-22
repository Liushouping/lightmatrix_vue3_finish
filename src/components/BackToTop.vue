<script>
import { ref } from 'vue';
export default {
  setup(){
	  function scrollFunction() {
			let mybutton = document.getElementById("back-to-top");
			if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
			    mybutton.style = "display:flex";
			} else {
			    mybutton.style = "display:none";
			}
		};

		function topFunction() {
			window.scrollTo(0, 0);
		};

		window.onscroll = function() {
			  scrollFunction()
		};

	  return {
			scrollFunction,
			topFunction,
	  }
  },
}
</script>

<template>
	<div 
	 id="back-to-top" 
	 @click="topFunction();" 
	 class="fixed right-[5%] bottom-6 rounded-full w-[45px] h-[45px] bg-white shadow z-30 flex justify-center items-center cursor-pointer">
	    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
	       <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
	    </svg>
	 </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Contact from '../components/Contact.vue'
import { ref, onMounted } from 'vue'
import AOS from "aos"
export default {
  setup(){
    onMounted(()=> {
    	AOS.init();
    });
    return {
    }
  },
  components: {
    Footer,
    Contact
  },
}
</script>
<template>
	<div class="relative w-full h-full lg:h-screen bg-[#f0f3fc] flex justify-center">
		
		<div class="w-full flex flex-col lg:flex-row justify-center items-center pt-40 lg:pt-20 md:pb-0 px-12 lg:px-0 my-[50px] overflow-hidden">
			<div class="w-full lg:w-1/2 flex flex-col justify-center items-end">
				<div class="w-full lg:w-[75%]">
					<h2 class="font-bold text-[42px] xs:text-[56px] tracking-[12px]">CONTACT</h2>
					<p class="text-left text-[14px]">Service base/information:<br>If you have business requirements, please contact us, or using the form below to info us. After receiving the message, we will contact you immediately</p>
				</div>
			</div>
			<div 
			data-aos="fade-up"
      data-aos-easing="ease-in-sine"
			class="w-full lg:w-1/2 pt-12">
				<img src="@/assets/image/3dman.png" alt="3dman" class="sm:w-[85%] lg:w-[100%] mx-auto float">
			</div>
		</div>

	</div>
  <Contact>
    <template #header>
      <img src="@/assets/image/lightmatrix_white.png" alt="LightMatrix logo"  class="w-[210px] py-4">
    </template>
  </Contact>
	<Footer />
</template>
<style scoped>
.float {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
    scale: 1;
  }
  50% {
    transform: translateY(-15px);
    scale: 1.01;
  }
  100% {
    transform: translateY(0px);
    scale: 1;
  }
}
</style>

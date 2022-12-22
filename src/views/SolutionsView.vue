<script>
import { ref, onMounted } from 'vue'
import Footer from '../components/Footer.vue'
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css';
export default {
  setup(){
    const video_left = ref(false);
    const video_right_1 = ref(false);
    const video_right_2 = ref(false);
    const video_right_3 = ref(false);
    const video_right_4 = ref(false);
    let swiper = null;
    const cards = ref({
      card_0: {
        id: "1",
        img: "/image/aichronus_logo.png",
        logo: "/image/aichronus.png",
        name: "4D-Box",
        content: "Breaks the frame with naked eyes, such as being in the scene, zero time and space constraints, integrating virtual and real-time holographic interaction, enhancing the visual experience, breaking the frame and realizing the imagination in the brain.",
      },
      card_1: {
        id: "2",
        img: "/image/slider_1.png",
        name: "4D Free-View System",
        name_2: "(5G/6G Applications)",
        content: "With '4D Free View' broadcast technology combined with 5G wide bandwidth, it is applied to events and entertainment, and you can experience a new viewing feast with all the angles.",
      },
      card_2: {
        id: "3",
        img: "/image/slider_2.png",
        name: "Hologram Box",
        content: "H-BOX holographic stage effect, breaking through time and geographical restrictions, creating an audio-visual feast for joint performances in different places.",
      },
      card_3: {
        id: "4",
        img: "/image/slider_3.png",
        name: "Meta Studio",
        name_2: "(Volumetric Live Broadcasting)",
        content: "3D Metaverse：Create a 3D Metaverse belonging to individuals and companies, enhance corporate identity with personal characteristics, combined diverse industries with art and cultural preservation, so that images can be transmitted across different time zones",
      },
      card_4: {
        id: "5",
        img: "/image/slider_4.png",
        name: "Avatar Creator",
        content: "4D Volummetric Capture ：Improving the 3D modeling technology, reducing time-consuming of engineering operations, and leverage more time effectively to create greater benefits.",
      },
      card_5: {
        id: "6",
        img: "/image/slider_5.png",
        name: "Immersive",
        name_2: "Cinema",
        content: "Immersive theater, as if you are in the scene to participate in activities, can be applied to exhibitions, entertainment, competitions, art and culture and other performances.",
      },
      card_6: {
        id: "7",
        img: "/image/slider_6.png",
        name: "WEB3.0",
        content: "Immersive theater, as if you are in the scene to participate in activities, can be applied to exhibitions, entertainment, competitions, art and culture and other performances.",
      },
    });
    const swipers = ref({
      project_01: {
        img: "/image/project_01.png"
      },
      project_02: {
        img: "/image/project_02.png"
      }
    });
    onMounted(()=> {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        allowTouchMove: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 1000,
        autoplay: {
          delay: 2000,
          autoplayDisableOnInteraction: false,
        },
        modules: [Navigation, Pagination, Autoplay],
      })
    });
    return {
      cards,
      swipers,
      video_left,
      video_right_1,
      video_right_2,
      video_right_3,
      video_right_4,
    }
  },
  components: {
    Footer
  },
}
</script>
<template>
  <div 
  class="relative w-full h-full xl:h-screen bg-[#f0f3fc] flex justify-center items-center">
  	<span class="absolute right-0 w-[70%] sm:w-[30%] h-full bg-gradient-to-r from-cyan-500 to-[#4f46e5]"></span>

    <div class="flex flex-col xl:flex-row py-36 lg:pt-20 lg:pb-0">
	    <div class="relative w-full xl:w-1/2 flex flex-col justify-center items-center xl:items-end">
        <div class="w-full sm:w-[75%] px-6 sm:px-0">
          <h2 class="font-bold text-[36px] xs:text-[56px] tracking-[12px]">SOLUTIONS</h2>
  	      <p class="text-[14px]">The most powerful hardware and software integration solution provider, to realize the imagination from your brain, providing solutions and processes according to consumer needs, and continuously improving the value of systems and services.</p>
        </div>
	    </div>
	    <div class="relative w-full xl:w-1/2 pl-6 sm:pl-24 lg:pl-6 pt-12 xl:pt-0">
	    	<div class="swiper mySwiper">
		        <div class="swiper-wrapper">
		          <div  
              v-for="(item, index) in swipers"
              class="swiper-slide">
		            <div class="bg-white w-full h-[250px] sm:h-[450px] 2xl:h-[650px] flex flex-col justify-center items-center space-y-6">
		              <img :src="item.img" :alt="item.name">
		            </div>
		          </div>
		        </div>
		    </div>
		      <!-- Button prev/next -->
		      <div class="swiper-button-prev absolute left-6 sm:left-24 lg:left-6 -bottom-14 z-[999] w-[36px] h-[36px] rounded-full bg-[#00a0d9] flex justify-center items-center cursor-pointer">
		        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="rotate-180 w-3 h-3 fill-white">
		          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
		        </svg>
		      </div>
		      <div class="swiper-button-next absolute left-20 sm:left-36 lg:left-20 -bottom-14 z-[999] w-[36px] h-[36px] rounded-full bg-[#00a0d9] flex justify-center items-center cursor-pointer">
		        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 fill-white">
		          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
		        </svg>
		      </div>
	    </div>
    </div>
  </div>

  <div class="bg-white w-full h-full flex flex-col justify-center items-center">
  	<div class="w-[90%] sm:w-[75%] lg:w-[50%] mx-auto flex flex-col justify-center items-center space-y-6 py-12">
      
  		<div 
      v-for="(item, index) in cards" class="w-full">
        <router-link :to="'/solutions/' + item.id" 
        class="w-full h-full sm:h-[240px] bg-[#f0f3fc] flex flex-col sm:flex-row space-x-0 sm:space-x-4 lg:space-x-2 space-y-6 sm:space-y-0 items-center justify-start p-6" style="color: #000;">
          <span class="w-full sm:w-[30%] lg:w-[15%]">
            <img :src="item.img" :class="`imgheight-${index}`" :alt="item.name" class="mx-auto h-[60px]">
          </span>
          <div class="w-full flex flex-col lg:flex-row justify-center items-center space-y-2 sm:space-y-4 lg:space-y-0">
            <div class="w-full lg:w-[35%] flex flex-col">
              <img v-if="item.logo" :src="item.logo" alt="logo" class="w-[100px] mx-auto sm:mx-0 lg:mx-auto py-2">
              <h5 class="text-center sm:text-left lg:text-center">{{ item.name }}</h5>
              <h5 v-if="item.name_2" class="text-center sm:text-left lg:text-center">{{ item.name_2 }}</h5>
            </div>
            <p class="w-full lg:w-[50%] text-[12px]">{{ item.content }}</p>
            <p v-if="item.footer" class="w-full sm:w-3/5 text-[12px]">{{ item.footer }}</p>
          </div>
        </router-link>
  		</div>
      
  	</div>
  </div>

  <div class="bg-[#081236] w-full h-full flex justify-center items-center py-24">
  	<div class="w-[90%] sm:w-[75%] mx-auto flex flex-col lg:px-6">
      <div>
        <h5 class="text-white text-[24px] py-4 tracking-[2px]">VIDEOS</h5>
      </div>
      <div class="flex flex-col lg:flex-row space-x-0 lg:space-x-6">
    		<div 
        @click="video_left = true;"
        class="relative w-full lg:w-1/2 h-[400px] 2xl:h-[720px] bg-cover bg-center flex justify-center items-center cursor-pointer group" 
        style="background-image: url('./image/img_left.png');">
    			<span class="absolute bg-black/40 w-[60px] h-[60px] rounded-full flex justify-center items-center z-10 duration-500 group-hover:bg-black">
    				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-white">
    					<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    				</svg>
    			</span>
    		</div>
    		<div class="w-full lg:w-1/2">
    			<div class="grid grid-cols-2 gap-6 h-[400px] 2xl:h-[720px] pt-6 lg:pt-0">
    				<div 
            @click="video_right_1 = true;"
            class="relative bg-cover bg-center flex justify-center items-center cursor-pointer group" 
            style="background-image: url(./image/video_right_1.png);">
    					<span class="absolute bg-black/40 w-[60px] h-[60px] rounded-full flex justify-center items-center z-10 duration-500 group-hover:bg-black">
    						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-white">
    						  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    						</svg>
    					</span>
    				</div>
    				<div 
            @click="video_right_2 = true;"
            class="relative bg-cover bg-center flex justify-center items-center cursor-pointer group" 
            style="background-image: url(./image/video_right_2.png);">
    					<span class="absolute bg-black/40 w-[60px] h-[60px] rounded-full flex justify-center items-center z-10 duration-500 group-hover:bg-black">
    						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-white">
    						  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    						</svg>
    					</span>
    				</div>
    				<div 
            @click="video_right_3 = true;"
            class="relative bg-cover bg-center flex justify-center items-center cursor-pointer group" 
            style="background-image: url(./image/video_right_3.png);">
    					<span class="absolute bg-black/40 w-[60px] h-[60px] rounded-full flex justify-center items-center z-10 duration-500 group-hover:bg-black">
    						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-white">
  						  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
  						</svg>
    					</span>
    				</div>
    				<div 
            @click="video_right_4 = true;"
            class="relative bg-cover bg-center flex justify-center items-center cursor-pointer group" 
            style="background-image: url(./image/video_right_4.png);">
    					<span class="absolute bg-black/40 w-[60px] h-[60px] rounded-full flex justify-center items-center z-10 duration-500 group-hover:bg-black">
    						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-8 h-8 text-white">
    						  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    						</svg>
    					</span>
    				</div>
    			</div>
    		</div>
      </div>
  	</div>
  </div>

  <Footer />
  <Teleport to="body">
    <transition name="fade">
      <div 
      v-if="video_left" 
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[2000]">
        <div @click="video_left = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="video_left = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative w-[100%] lg:w-[50%] mx-auto z-20">
            <div class="player-container">
              <vue3-video-player 
              loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="LightMatrix"
              src="/video/free/4D Free-View-sports_01.mp4"></vue3-video-player>
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
  <Teleport to="body">
    <transition name="fade">
      <div 
      v-if="video_right_1" 
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[2000]">
        <div @click="video_right_1 = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="video_right_1 = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative w-[100%] lg:w-[50%] mx-auto z-20">
            <div class="player-container">
              <vue3-video-player 
              loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="LightMatrix"
              src="/video/Avatar/AvatarCreator_en01.mp4"></vue3-video-player>
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
  <Teleport to="body">
    <transition name="fade">
      <div 
      v-if="video_right_2" 
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[2000]">
        <div @click="video_right_2 = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="video_right_2 = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative w-[100%] lg:w-[50%] mx-auto z-20">
            <div class="player-container">
              <vue3-video-player 
              loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="LightMatrix"
              src="/video/Meta_Studio_Top.mp4"></vue3-video-player>
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
  <Teleport to="body">
    <transition name="fade">
      <div 
      v-if="video_right_3" 
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[2000]">
        <div @click="video_right_3 = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="video_right_3 = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative w-[100%] lg:w-[50%] mx-auto z-20">
            <div class="player-container">
              <vue3-video-player 
              loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="LightMatrix"
              src="/video/Meta/Meta Studio_01.mp4"></vue3-video-player>
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
  <Teleport to="body">
    <transition name="fade">
      <div 
      v-if="video_right_4" 
      class="fixed top-0 left-0 w-full h-screen bg-black/80 flex justify-center items-center z-[2000]">
        <div @click="video_right_4 = false" class="absolute top-0 left-0 w-full h-screen bg-black/30 z-20"></div>

        <div class="absolute top-4 right-4 z-20">
          <button type="button" @click="video_right_4 = false">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="relative w-[100%] lg:w-[50%] mx-auto z-20">
            <div class="player-container">
              <vue3-video-player 
              loop autoplay preload="auto" x5-video-player-fullscreen="true" x5-playsinline="" playsinline="playsinline" webkit-playsinline="" controls title="LightMatrix"
              src="/video/Hologram/H-BOX-music-01.mp4"></vue3-video-player>
            </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<style scoped>
.swiper {
	width: 100%;
  height: 100%;
 }

.swiper-slide {
  text-align: center;
  font-size: 18px;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 90% !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.imgheight-card_0 {
  height: 90px !important;
}
</style>
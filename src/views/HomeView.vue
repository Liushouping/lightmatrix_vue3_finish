<script>
import { ref, onMounted } from 'vue';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import HomeBanner from '../components/HomeBanner.vue'
import VideoBanner from '../components/VideoBanner.vue'
import TwoCard from '../components/TwoCard.vue';
import VideoHome from '../components/VideoHome.vue';
import Footer from '../components/Footer.vue';
import Contact from '../components/Contact.vue';
export default {
  setup(){
    let swiper = null;
    const sliders = ref({
      swiper_0: {
        id: "1",
        img: "/image/aichronus_logo.png",
        logo: "/image/aichronus.png",
        content: "4D-Box",
        body: "4D-Box"
      },
      swiper_1: {
        id: "2",
        img: "/image/slider_1.png",
        name: "4D Free-View System",
        content: "(5G/6G Applications)",
        body: "",
      },
      swiper_2: {
        id: "3",
        img: "/image/slider_2.png",
        name: "Hologram Box",
      },
      swiper_3: {
        id: "4",
        img: "/image/slider_3.png",
        name: "Meta Studio",
        content: "(Volumetric Live Broadcasting)",
        body: ""
      },
      swiper_4: {
        id: "5",
        img: "/image/slider_4.png",
        name: "Avatar Creator",
      },
      swiper_5: {
        id: "6",
        img: "/image/slider_5.png",
        name: "Immersive",
        content: "Cinema",
        body: "Cinema"
      },
      swiper_6: {
        id: "7",
        img: "/image/slider_6.png",
        name: "WEB3.0",
      },
      swiper_7: {
        id: "1",
        img: "/image/aichronus_logo.png",
        logo: "/image/aichronus.png",
        content: "4D-Box",
        body: "4D-Box"
      },
      swiper_8: {
        id: "2",
        img: "/image/slider_1.png",
        name: "4D Free-View System",
        content: "(5G/6G Applications)",
        body: ""
      },
      swiper_9: {
        id: "3",
        img: "/image/slider_2.png",
        name: "Hologram Box",
      },
      swiper_10: {
        id: "4",
        img: "/image/slider_3.png",
        name: "Meta Studio",
        content: "(Volumetric Live Broadcasting)",
        body: ""
      },
      swiper_11: {
        id: "5",
        img: "/image/slider_4.png",
        name: "Avatar Creator",
      },
      swiper_12: {
        id: "6",
        img: "/image/slider_5.png",
        name: "Immersive",
        content: "Cinema",
        body: "Cinema"
      },
      swiper_13: {
        id: "7",
        img: "/image/slider_6.png",
        name: "WEB3.0",
      },
    });
    onMounted(()=> {
      swiper = new Swiper(".mySwiper", {
        slidesPerView: "3",
        spaceBetween: 30,
        allowTouchMove: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        speed: 1000,
        autoplay: {
          delay: 2000,
          autoplayDisableOnInteraction: false,
        },
        breakpoints: {
          415: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
          1680: {
            slidesPerView: 10,
            spaceBetween: 10,
          },
        },
        modules: [Navigation, Pagination, Autoplay],
      })
    });
    return {
      sliders
    }
  },
  components: {
    HomeBanner,
    VideoBanner,
    TwoCard,
    VideoHome,
    Footer,
    Contact
  },
}
</script>
<template>
  <HomeBanner />
  <div class="w-full h-screen sm:h-[75vh] lg:h-screen flex justify-center items-center relative">

    <div class="w-[100%] sm:w-[90%] h-[180px] sm:h-[200px] absolute -top-[280px] se:-top-[340px] sm:-top-72 lg:-top-60 xl:-top-[15rem]  2xl:-top-[25rem] sm:right-0 z-20 flex flex-row justify-start items-center px-4 sm:px-0">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <div 
          v-for="(item, index) in sliders"
          class="swiper-slide">
            <router-link :to="'/solutions/' + item.id">
              <div class="bg-white w-[110px] sm:w-[170px] h-[110px] sm:h-[170px] flex flex-col justify-center items-center p-2 space-y-1 sm:space-y-0">
                <div class="h-full flex justify-center items-center">
                  <div class="sm:pt-4">
                    <img :class="`imgheight-${index}`" :src="item.img" class="mx-auto w-[50%] sm:w-[100%] sm:h-[60px]" :alt="item.name">
                  </div>
                </div>
                <div class="h-full flex flex-col justify-center items-center text-center">
                  <p class="text-[12px] xs:text-[14px]">{{ item.name }}</p>
                  <img v-if="item.logo" :src="item.logo" class="w-[75px] sm:w-[100px] pb-1 sm:py-2">
                  <p class="text-[12px] xs:text-[14px] hidden sm:flex">{{ item.content }}</p>
                  <p class="text-[12px] xs:text-[14px] flex sm:hidden">{{ item.body }}</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="swiper-button-prev absolute left-4 xs:left-4 sm:left-0 -bottom-4 sm:-bottom-8 z-[999] w-[36px] h-[36px] rounded-full bg-[#00a0e9] flex justify-center items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="rotate-180 w-3 h-3 fill-white">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>

      <div class="swiper-button-next absolute left-16 xs:left-16 sm:left-12 -bottom-4 sm:-bottom-8 z-[999] w-[36px] h-[36px] rounded-full bg-[#00a0d9] flex justify-center items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 fill-white">
          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
        </svg>
      </div>

    </div>
    <VideoBanner />
  </div>
  <TwoCard />
  <VideoHome />
  <Contact>
    <template #header>
      <h2 class="font-bold text-[48px] tracking-[12px] text-white">Contact</h2>
    </template>
  </Contact>
  <Footer />
</template>

<style scoped>
  .imgheight-swiper_0, .imgheight-swiper_7, .imgheight-swiper_14 {
    width: 100% !important;
    height: 90px !important;
  }
  @media only screen and (max-width: 640px) {
    .imgheight-swiper_0, .imgheight-swiper_7, .imgheight-swiper_14 {
      width: 80% !important;
      height: 55px !important;
    }
  }
</style>
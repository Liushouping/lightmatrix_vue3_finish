<script>
import { ref, onMounted, watch } from "vue";

export default {
  setup(){
    const fullpage = ref(false);
    const open = ref(false);
  	const links = ref({
      Home: {
        name: "Home",
        href: "/"
      },
      About: {
        name: "About us",
        href: "/about"
      },
      Solutions: {
        name: "Solutions",
        href: "/solutions"
      },
      Contact: {
        name: "Contact",
        href: "/contact"
      },
    });
    return {
    	links,
      open,
      fullpage
    }
  },
}
</script>

<template>
	<header class="w-full h-[75px] bg-white fixed top-0 flex justify-center items-center px-4 sm:px-0 z-[1000]">
    <div class="w-[90%] sm:w-[75%] flex flex-row justify-between items-center">
  		<span class="cursor-pointer">
        <router-link to="/">
          <img src="@/assets/image/light_logo.png" alt="LightMatrix logo" class="w-[140px]">
        </router-link>  
      </span>
  		<nav>
  			<ul class="hidden lg:flex flex-row space-x-[2.5rem]">
  				<li 
  		    v-for="(item, index) in links" :key="item.name" class="cursor-pointer">
  		      <router-link 
            class="text-gray-900 tracking-[1px]"
  		      :to="item.href">{{ item.name }}</router-link>
  		    </li>
  			</ul>
  		</nav>
      <div class="flex lg:hidden">
        <button class="w-10 h-10 relative focus:outline-none" @click="open = !open;fullpage =! fullpage">
          <div class="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
            :class="{'rotate-45 text-white': open,' -translate-y-1.5': !open }"></span>
            <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" 
            :class="{'-rotate-45 text-white': open, ' translate-y-1.5': !open}"></span>
          </div>
        </button>
      </div>
    </div>
    <!-- mobile-->
      <transition 
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster">
      <div 
      v-if="fullpage"
      @mousewheel.prevent
      @touchmove.prevent
      class="fixed top-0 left-0 bg-gray-900 w-full h-full flex flex-col justify-center items-center overflow-hidden z-[1000]">
        <!--  -->
        <div>
          <ul class="flex flex-col space-y-6 items-center">
            <li v-for="(item, index) in links" :key="item.name">
              <router-link
                :to="item.href"
                class="text-[14px] text-white"
                @click="open = !open;fullpage = false;"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
        <!--  -->
        <div class="fixed bottom-[8%] flex justify-center">
          <ul class="flex flex-row space-x-4">
            <li>
              <a href="https://discord.com/invite/madmanga" target="_blank" rel="noopener">
                <img src="@/assets/image/footer_fb.png" alt="fb" class="w-[25px]">
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/madmanganft" target="_blank" rel="noopener">
                <img src="@/assets/image/footer_ig.png" alt="ig" class="w-[25px]">
              </a>
            </li>
          </ul>
        </div>
        <!-- close -->
        <div class="fixed top-4 right-10 z-[10]">
          <button class="text-white w-10 h-10 relative focus:outline-none" @click="open = !open;fullpage = false;">
            <div class="block w-5 absolute left-1/2 top-1/2 transform  -translate-x-1/2 -translate-y-1/2">
              <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" 
              :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
              <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" 
              :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
            </div>
          </button>
        </div>
        <!--  -->
      </div>
      </transition>
	</header>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import BackToTop from './components/BackToTop.vue'
import { ref, onMounted } from 'vue'
export default {
  setup(){
    onMounted(()=> {
    });
    return {
    }
  },
  components: {
    Header,
    BackToTop
  },
}
</script>

<template>
  <div id="app">
  <Header />
  <RouterView />
  <BackToTop />
  </div>
</template>

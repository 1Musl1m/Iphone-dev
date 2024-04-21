<template>
  <section class="w-full h-[calc(100vh-60px)] bg-black relative">
    <div class="h-5/6 w-full flex items-center justify-center flex-col">
      <p id="hero" class="text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10">iPhone 15 Pro</p>
      <div class="md:w-10/12 w-9/12">
        <video
          autoplay
          muted
          playsinline
          :key="videoSrc"
        >
          <source :src="videoSrc" type="video/mp4" />
        </video>
      </div>
    </div>

    <div
      id="cta"
      class="flex flex-col items-center opacity-0 translate-y-20"
    >
      <a href="#highlights" class="px-5 py-2 rounded-3xl bg-blue-600 my-5 hover:bg-transparent border border-transparent hover:border hover:text-blue hover:border-blue">Купить</a>
      <p class="font-normal text-xl">От $199/месяц или $999</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { heroVideo, smallHeroVideo } from '../utils';
import gsap from 'gsap';

const videoSrc = ref('');

const handleVideoSrcSet = () => {
  if (typeof window !== 'undefined') {
    videoSrc.value = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
  }
};

watch(() => window.innerWidth, handleVideoSrcSet);

onMounted(() => {
  handleVideoSrcSet(); 
  window.addEventListener('resize', handleVideoSrcSet);
  gsap.to('#hero', { opacity: 1, delay: 2 });
  gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
});

onUnmounted(() => {
  window.removeEventListener('resize', handleVideoSrcSet);
});
</script>
<script setup>
import IntroCard from '../components/IntroCard.vue';
import SlideShow from '../components/SlideShow.vue';
import Data from '../../MockData.json'
const Images = {
    files:[Data.designs[0].image, Data.designs[1].image,Data.designs[2].image]
  }
console.log(Images.files)
</script>

<template>
  <main>
    <IntroCard />
    <h2>Design Highlights</h2>
    <SlideShow :fileObj="Images" />
  </main>
</template>

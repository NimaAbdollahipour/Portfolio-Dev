<script setup>
import { RouterView } from 'vue-router'
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';
const Links = {
  links:[
      {
        "id":1,
        "url":"http://instagram.com",
        "image":"./src/assets/logo.svg"
      },
      {
        "id":2,
        "url":"http://linkedin.com",
        "image":"./src/assets/logo.svg"
      },
      {
        "id":3,
        "url":"http://github.com",
        "image":"./src/assets/logo.svg"
      }
    ]
}
</script>

<template>
  <header>
    <div class="container">
      <HeaderComp />
    </div>
  </header>
  <div class="container">
    <RouterView />
  </div>
  <FooterComp :linkObj="Links"/>
</template>



<script setup>
import DesignCard from "../components/DesignCard.vue";
import Data from "../../MockData.json"
const designs = Data.designs
</script>
<template>
<h2>3D Models and Designs</h2>
    <div id="all-designs">
        <DesignCard v-for="design in designs" :description="design.description" :key="design.id" 
        :image="design.image" :link="design.link" />
    </div>
</template>
<style>
    #all-designs{
        padding: 20px 0px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 10px;
        vertical-align: middle;
    }
</style>
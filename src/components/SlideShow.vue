<template>
    <div id="slides-container">
        <img :src="all_files.files[current]" id="s-img"/>
        <div id="slide-control">
            <button id="left" @click="current = (current+2)%3" class="slide-buttons"></button>
            <div id="slide-status">
                <span id="slide-1" class="slide-ind" v-if="current==0"></span>
                <span id="slide-1" class="slide-ind active" v-if="current!=0"></span>
                <span id="slide-2" class="slide-ind" v-if="current==1"></span>
                <span id="slide-2" class="slide-ind active" v-if="current!=1"></span>
                <span id="slide-3" class="slide-ind" v-if="current==2"></span>
                <span id="slide-3" class="slide-ind active" v-if="current!=2"></span>
            </div>
            <button id="right" @click="current = (current+1)%3" class="slide-buttons"></button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                all_files:this.fileObj,
                current:0
            }
        },
        props:{
            fileObj:Object
        },
        mounted(){
            setInterval(()=>{this.current = (this.current + 1)%3},3000)
        }
    }
</script>
<style>
    #slides-container{
        max-width:640px;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 100px;
        background-color: var(--dark);
        /*border: 1px solid var(--lightest);*/
        padding: 10px;
    }
    .slide-buttons{
        background-image: url();
        width: 30px;
        height: 30px;
        background-size: cover;
        vertical-align: middle;
        border: 0px;
    }
    #left{
        background-image: url("./src/assets/left.png");
    }
    #right{
        background-image: url("./src/assets/right.png");
    }
    #s-img{
        display: inline-block;
        width: 100%;
        aspect-ratio: calc(16/9);
    }
    #slide-control{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    #slide-status{
        display: flex;
        justify-content: center;
        gap: 3px;
        width: 60px;
        padding: 10px;
    }
    .slide-ind{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        display: inline-block;
        background-color: var(--darkest);
        vertical-align:bottom;
    }
    .active{
        background-color: var(--lightest);
    }
</style>
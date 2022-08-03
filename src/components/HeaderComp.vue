<template>
        <h1>Nima</h1>
        <button id="menu-open" @click="open = true"></button>
        <nav>
            <RouterLink to="/" class="nav-link">Home</RouterLink>
            <RouterLink to="/projects" class="nav-link">Projects</RouterLink>
            <RouterLink to="/designs" class="nav-link">Designs</RouterLink>
            <RouterLink to="/recommended" class="nav-link">Recommended</RouterLink>
            <RouterLink to="/about" class="nav-link">About</RouterLink>
        </nav>
        <div v-if="open" id="small-screen-menu" >
            <button id="menu-close" @click="open = false"></button>
            <RouterLink to="/" class="small-screen-link" @click="open = false">Home</RouterLink>
            <RouterLink to="/projects" class="small-screen-link" @click="open = false" >Projects</RouterLink>
            <RouterLink to="/designs" class="small-screen-link" @click="open = false">Designs</RouterLink>
            <RouterLink to="recommended" class="small-screen-link" @click="open = false">Recommended</RouterLink>
            <RouterLink to="/about" class="small-screen-link" @click="open = false">About</RouterLink>
        </div>
</template>
<script>
import { RouterLink } from 'vue-router'
    export default{
        data(){
            return{
                open:false
            }
        },
        methods:{

        }
    }
</script>
<style scoped>
    h1{
        color: var(--lightest);
    }
    .nav-link{
        margin-right: 20px;
        text-decoration: none;
        font-weight: bold;
        color: var(--darkest);
    }
    .nav-link:hover{
        color:var(--dark)
    }
    .nav-link:active{
        color:var(--lightest)
    }
    #menu-open{
        display: none;
        width:30px;
        height:30px;
        vertical-align: super;
        background-image:url("../assets/menu.png");
        border:0px;
        background-size: cover;
    }
    #small-screen-menu{
        text-align: right;
        position: absolute;
        top:0px;
        left:0px;
        width: 100%;
        background-color: var(--lightest);
        height: 100vh;
    }
    .small-screen-link{
        text-align: left;
        padding: 10px;
        display: block;
        border-bottom: 1px solid var(--darkest);
        font-size: large;
        font-weight: bold;
        text-decoration: none;
        color:var(--darkest);
    }
    .small-screen-link:hover{
        background-color: var(--green);
    }
    .small-screen-link:active{
        background-color: var(--light);
    }
    #menu-close{
        margin-top: 10px;
        margin-right: 10px;
        width: 20px;
        height:20px;
        background-color: transparent;
        border: 0px;
        background-image:url("../assets/close.png");
        background-size: cover;
    }
    @media screen and (max-width:640px){
        h1{
            display: inline-block;
            width:calc(100% - 60px)
        }
        #menu-open{
            display: inline;
        }
        nav{
            display: none;
        }
    }
</style>
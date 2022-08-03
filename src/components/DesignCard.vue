<template>
    <div class="design-card">
        <img class="design-image" :src="image" alt="couldn't load image"/>
        <p class="design-description">{{description}}</p>
        <a class="design-link" :href="link">Visit Website</a>
    </div>
</template>
<script>
    export default{
        props:["description","link","image"]
    }
</script>
<style>
    .design-card{
        width:18rem;
        background-color: var(--light);
        padding: 10px;
        padding-bottom: 20px;
        text-align: center;
        display: inline-block;
    }
    .design-description{
        color:var(--dark);
        text-align: left;
    }
    .design-link{
        background-color: var(--darkest);
        padding:5px 15px;
        border-radius: 20px;
        text-decoration: none;
        color: var(--lightest);
    }
    .design-link:hover{
        background-color: var(--dark);
        color: var(--light);
    }
    .design-image{
        width: 100%;
        aspect-ratio: calc(16/9);
    }
    .design-link:active{
        opacity: 0.5;
    }
    @media screen and (max-width:640px){
        .design-card{
            display: block;
            width: 100%;
            margin: 30px 0px;
        }
    }
</style>
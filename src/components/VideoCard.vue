<template>
    <div class="video-card">
        <iframe :src="preview" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
         encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video-preview"></iframe>
        <h3 class="video-title">{{title}}</h3>
        <h4 class="video-channel">{{channel}}</h4>
        <p class="video-description">{{description}}</p>
        <a class="video-link" :href="link">Watch on YouTube</a>
    </div>
</template>
<script>
    export default{
        props:["title","channel","description","link","preview"]
    }
</script>
<style>
    .video-card{
        width:18rem;
        background-color: var(--light);
        padding: 10px;
        padding-bottom: 20px;
        text-align: center;
        display: inline-block;
    }
    .video-title,.video-channel,.video-description{
        color:var(--dark);
        text-align: left;
    }
    .video-link{
        background-color: var(--darkest);
        padding:5px 15px;
        border-radius: 20px;
        text-decoration: none;
        color: var(--lightest);
    }
    .video-link:hover{
        background-color: var(--dark);
        color: var(--light);
    }
    .video-link:active{
        opacity: 0.5;
    }
    .video-preview{
        width: 100%;
        aspect-ratio: calc(16/9);
    }
    @media screen and (max-width:640px){
        .video-card{
            display: block;
            width: 100%;
            margin: 30px 0px;
        }
    }
    
</style>
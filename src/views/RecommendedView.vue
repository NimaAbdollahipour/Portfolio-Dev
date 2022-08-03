<template>
<section id="book-section">
<h2 class="dark">Recommended Books</h2>
<div id="books">
    <BookCard v-for="book in books" :title="book.title" :link="book.link" :author="book.author" :image="book.image"/>
</div>
</section>
<hr class="line"/>
<section id="video-section">
<h2 class="dark">Recommended Videos</h2>
<div id="videos">
    <VideoCard v-for="video in videos" :title="video.title" :link="video.link" :channel="video.channel" :preview="video.preview"/>
</div>
</section>
</template>
<script setup>
    import BookCard from "../components/BookCard.vue";
    import VideoCard from "../components/VideoCard.vue";
    import Data from "../../MockData.json"
    const videos = Data.videos
    const books = Data.books
</script>
<style>
    #books,#videos{
        padding: 20px 0px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 10px;
        vertical-align: middle;
    }
    #video-section{
        padding-top: 50px;
        min-height: 100vh;
        vertical-align: middle;
    }
    #book-section{
        padding-top: 50px;
        min-height: 80vh;
        vertical-align: middle;
    }
    @media screen and (max-width:640px){
        #video-section,#book-section{
            padding-top: 20px;
        }
    }
    .line{
        background-color: transparent;
        border: 0px;
        border-top: 1px solid var(--darkest);
    }
</style>
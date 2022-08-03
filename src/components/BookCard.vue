<template>
    <div class="book-card">
        <img class="book-image" :src="image" alt="couldn't load image"/>
        <h3 class="book-title">{{title}}</h3>
        <h4 class="book-author">{{author}}</h4>
        <p class="book-description">{{description}}</p>
        <a class="book-link" :href="link">Buy This Book from Amazon</a>
    </div>
</template>
<script>
    export default{
        props:["title","author","description","link","image"]
    }
</script>
<style>
    .book-card{
        width:18rem;
        background-color: var(--light);
        padding: 10px;
        padding-bottom: 20px;
        text-align: center;
        display: inline-block;
    }
    .book-title,.book-author,.book-description{
        color:var(--dark);
        text-align: left;
    }
    .book-link{
        background-color: var(--darkest);
        padding:5px 15px;
        border-radius: 20px;
        text-decoration: none;
        color: var(--lightest);
    }
    .book-link:hover{
        background-color: var(--dark);
        color: var(--light);
    }
    .book-image{
        max-height: 120px;
    }
    .book-link:active{
        opacity: 0.5;
    }
    @media screen and (max-width:640px){
        .book-card{
            display: block;
            width: 100%;
            margin: 30px 0px;
        }
        .book-image{
        max-height: 180px;
        }
    }
</style>
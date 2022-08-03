<template>
    <div class="project-card">
        <h3 class="project-title">{{projectObj.title}}</h3>
        <p class="project-description">{{projectObj.description}}</p>
        <div class="tag-container">
            <span class="project-tag" v-for="tag in projectObj.tags" :key="tag" >{{tag}}</span>
        </div>
        <a class="project-link" :href="projectObj.link">GitHub Repository</a>
    </div>
</template>
<script>
    export default{
    props: {
        projectObj: Object
    }
}

</script>
<style>
    .project-card{
        width:18rem;
        padding: 10px;
        display: inline-block;
        background-color: var(--light);
        text-align: center;
    }
    .project-title,.project-description{
        text-align: left;
    }
    .project-link{
        background-color: var(--darkest);
        padding:5px 15px;
        border-radius: 20px;
        text-decoration: none;
        color: var(--lightest);
    }
    .project-link:hover{
        background-color: var(--dark);
        color: var(--light);
    }
    .tag-container{
        margin-bottom: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
    }
    .project-tag{
        padding: 5px;
        background-color: var(--dark);
        display: inline-block;
        color: var(--lightest);
        border-radius: 5px;
    }
    @media screen and (max-width: 640px){
        .project-card{
            display: block;
            width: 100%;
        }
    }
</style>
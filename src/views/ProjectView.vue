<template>
    <h2>Projects</h2>
    <SearchBar @update:search="prepareData"/>
    <div id="all-projects">
        <ProjectCard v-for="project in Projects" :projectObj="project"/>
    </div>
</template>
<script>
    import ProjectCard from '../components/ProjectCard.vue';
    import SearchBar from '../components/SearchBar.vue';
    import Data from '../../MockData.json'
    export default{
        data(){
            return{
                Projects:Data.projects,
                ALL_Projects:Data.projects
            }
        },
        components:{
            ProjectCard:ProjectCard,
            SearchBar:SearchBar
        },methods:{
            prepareData(value){
            this.Projects = []
            if(value===""){
                this.Projects = this.ALL_Projects
            }else{
                for(let v in this.ALL_Projects){
                    for (let t in this.ALL_Projects[v].tags){
                        if(this.ALL_Projects[v].tags[t].toLowerCase().includes(value.toLowerCase())){
                            this.Projects.push(this.ALL_Projects[v])
                            break;
                        }
                    }
                }
            }
        }
        }
    }
</script>
<style>
    #all-projects{
        flex-wrap: wrap;
        display:flex;
        gap: 10px;
        justify-content: space-between;
    }
</style>
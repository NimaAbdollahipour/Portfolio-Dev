<template>
    <div class="search-container">
        <input type="search" v-model="search_text" placeholder="search by tag" @input="searchItem"/>
    </div>
</template>
<script>
export default{
    data(){
        return {
            search_text:"",
        }
    },
    props:["item"],
    methods:{
        searchItem(){
            this.$emit('update:search',this.search_text)
        }
    }
}
</script>

<style scoped>
    div{
        width: 100%;
    }
    input{
        background-color: var(--green);
        padding: 10px;
        max-width: 600px;
        width: 100%;
        margin: auto;
        margin-bottom: 20px;
        border: 1px solid var(--lightest);
        color:var(--lightest)
    }
    @media  screen and (max-width:600px) {
        button{
            display: block;
            width: 100%;
            border-radius: 0px;
        }
        input{
            width:100%;
        }
    }
    .search-container{
        text-align: center;
        padding: 15px;
    }
</style>
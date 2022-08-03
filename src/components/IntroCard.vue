<template>
    <section id="intro-section">
        <div id="intro">
            <div class="col">
                <h2>About</h2>
                <p>Nima Abdollahipour has a bachelor’s degree in Electrical Engineering from K. N. Toosi University of Technology
                     in Tehran and he is currently studying Software Engineering at Eastern Mediterranean University.</p>
                <p>He is interested in Web Development.</p>
                <p>One of his hobbies is designing 3D Models. You can find some of his designs on Designs Page in this website.</p>
            </div>
            <div class="col">
                <img src="../assets/profile.jpg" id="profile-img"/>
            </div>
        </div>
    </section>
</template>
<style>
    #intro-section{
        min-height: 90vh;
        padding-top: 100px;
    }
    .col{
        padding: 10px;
        display: inline-block;
        width: calc(50% - 2px);
        vertical-align: middle;
    }
    #profile-img{
        width: 100%;
    }
    #intro{
        padding: 10px 50px;
    }
    @media screen and (max-width: 640px){
        .col{
            display:block;
            width: 100%;
        }
        #intro-section{
            min-height: 40vh;
            padding-top: 20px;
        }
        #intro{
        padding: 10px;
    }
    }
    
</style>
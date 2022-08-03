<template>
    <section id="about-section">
        <div id="about">
            <div class="col">
                <h2>About</h2>
                <p>Nima Abdollahipour has a bachelor’s degree in Electrical Engineering from K. N. Toosi University of Technology
                   in Tehran and he is currently studying Software Engineering at Eastern Mediterranean University.</p>
                <p>He has born on 1999/8/16 in Tabriz, Iran. He attended the exceptional talents middle school and high school and 
                  then applied for one of the Iran’s top Universities in Engineering and finished his education successfully in there.
                   He then applied for Eastern Mediterranean University in Northern Cyprus and he is currently pursuing a degree in 
                   Software Engineering.</p>
                <p>He is interested in Web Development.</p>
                <p>In his free time, he builds 3D Models, Game Assets and Short Animations.</p>
                <p>His Graduation Project is about building a Greenhouse Automation System, which allows users to monitor their 
                  greenhouse’s conditions using the web application on their phone, tablet or PC. This system controls different 
                  elements such as temperature, water level and light automatically.</p>
            </div>
            <div class="col">
                <img src="../assets/profile.jpg" id="profile-img"/>
            </div>
        </div>
    </section>
</template>
<style>
    #about-section{
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
    #about{
      padding: 10px 50px;
    }
    @media screen and (max-width: 640px){
        .col{
            display:block;
            width: 100%;
        }
        #about-section{
            min-height: 40vh;
            padding-top: 20px;
        }
        #about{
          padding: 10px 10px;
        }
    }
    
</style>
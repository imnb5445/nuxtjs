<template> 
<section class="hero">
    <div class="hero-cover">
        <div class="hero-item-container">
            <h1 class="hero-title">LOREM IMPSUM</h1>
            <p class="hero-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptate odit labore accusantium quidem, enim a vitae quisquam distinctio maiores asperiores ipsa sed officiis nihil non voluptates fugit veniam aut.</p>
            <button class="hero-button">Lorem</button>
        </div>
    </div>
</section>

</template>

<script >

</script>

<style>
   .hero{
    width: 100%;
    height: 120vh;
    margin-top: -2.5rem;
    background-image: url("~/assets/hero-background.png");
    background-size: cover;
    overflow-y: hidden;
    background-repeat: no-repeat;
   } 

   .hero-cover{
    height: 100%;
    padding: 5rem;
    background-color: rgb(0, 0, 0,0.5);
   }

   .hero-title{
    z-index: 1;
    margin-bottom: -1rem;
    font-size: 5rem;
    font-weight: 600;
    color: white;
   }
   .hero-text{
    width: 30rem;
    color: white;
   }

   .hero-button{
    border: 0;
    height: 2.5rem;
    width: 5rem;
    border-radius: 10px;
    background-color: white;
    font-weight: 500;
    font-weight: bold;
    font-size: larger;
    color: rgb(17, 17, 77);
    transition: 200ms ease-in-out;
   }

   .hero-button:hover{
    color: white;
    background-color: rgb(17, 17, 77);
    transform: scale(1.2);
   }

  

</style>
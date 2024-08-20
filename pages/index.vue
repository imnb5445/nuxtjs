<template> 
  <div class="hero">
    <div class="hero-cover">
        <div class="hero-item-container">
            <h1 class="hero-title">LOREM IMPSUM</h1>
            <p class="hero-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum voluptate odit labore accusantium quidem, enim a vitae quisquam distinctio maiores asperiores ipsa sed officiis nihil non voluptates fugit veniam aut.</p>
            <button class="hero-button">Lorem</button>
        </div>
    </div>
  </div>
</template>

<script >

</script>

<style>
   .hero{
    width: 200%;
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

</style>
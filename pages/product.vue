<template>
    <section class="product">
        <div class="product-normal">
            <h5 class="product-title">Lorem</h5>
            <hr width="70%" size="2">
            <p class="product-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque repudiandae provident dicta eligendi corrupti aspernatur similique, exercitationem, aliquid odit vero quod, ut commodi veniam atque aut dolorum et cum?</p>
        </div>
        <div class="product-normal">
            <h5 class="product-title">Lorem</h5>
            <hr width="70%" size="2">
            <p class="product-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque repudiandae provident dicta eligendi corrupti aspernatur similique, exercitationem, aliquid odit vero quod, ut commodi veniam atque aut dolorum et cum?</p>
        </div>
        <div class="product-normal">
            <h5 class="product-title">Lorem</h5>
            <hr width="70%" size="2">
            <p class="product-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque repudiandae provident dicta eligendi corrupti aspernatur similique, exercitationem, aliquid odit vero quod, ut commodi veniam atque aut dolorum et cum?</p>
        </div>
    </section>
</template>

<style>
    .product{
        width: 100%;
        height: 50rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        display: flex;
        justify-content: center;
        flex-direction: row;
    }
    /* .product-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   } */
   .product-normal{
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    justify-content: ; */
    width: 15rem;
    height: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-image: url("~/assets/hero-background.png");
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
    transition: 250ms ease-in-out;
   }

   .product-title{
    text-align: center;
    width: 100%;
    margin-bottom: -0.5rem;
    color: white;
   }

   .product-text{
    color: white;
    text-align: justify;
    font-size: 0.8rem;
    padding-left: 1rem;
    padding-right: 0.8rem;
   }

   .product-expanded{
    display: none;
    width: 15rem;
    height: 17rem;
    background-image: url("~/assets/hero-background.png");
    background-size: cover;
    border-radius: 10px;
   }

 
   .product-normal:hover{
    height: 17rem;
   }

   

</style>
<script setup>
const supabase = useSupabaseClient()
const products = ref([])

async function productTest() {
  const { data } = await supabase.from('tb-produk').select()
  products.value = data

  
}


onMounted(() => {
  productTest()
})
</script>




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

    <section class="best-deal">
    <div class="best-deal-container">
        <div class="carosel-fading-left">
             
        </div>
        <div class="deal-container" v-for="product in products" :key="product.produk_id">
            <div class="price-container">
              <p class="deal-name"> {{ product.nama_produk }} {{ product.harga }}$</p>
            </div>
        </div>
        <div class="carosel-fading-right"></div>
    </div>
    </section>
        
</template>

<style>
    .best-deal{
        width: 70%;
        display: flex;
        justify-content: center;
    }
    .best-deal-container{
        width: 100%;
        padding-bottom: 2rem;
        padding-left: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: baseline;
        overflow-x: scroll;
        overflow-y: hidden;
        
    }

    .best-deal-container::-webkit-scrollbar{
        display: none;
    }
    .deal-container{
        width: 130px;
        min-width: 17rem;
        height: 11rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        border-radius: 20px 20px 0 0;
        background-size: cover;
        background-image: url("~/assets/hero-background.png");
        align-content: end;
        
        
    }

    .price-container{
        width: 80%;
        height: 1rem;
        border-radius: 0 10px 0 0;
        background-color: aqua;
    }

    .carosel-fading-left{
        height: 12rem;
        width: 8%;
        position: absolute;
        left: 10%;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgb(0, 0, 0) 70%, rgba(230,207,207,0) 100%);
        z-index: 1;
    }

    .carosel-fading-right{
        height: 12rem;
        width: 10%;
        position: absolute;
        right: 8%;
        background: rgb(2,0,36);
        background: linear-gradient(270deg, rgb(0, 0, 0) 70%, rgba(230, 207, 207, 0) 100%);
        z-index: 1;
    }

    /* .deal-container::before,
    .deal-container::after{
        content: "";

        position: absolute;
        z-index: 1;
        width: 10px;
        top: 0;
        height: 100%;
        pointer-events: none;
    }

    .deal-container::before{
        left: 0;
        background: linear-gradient(to right, rgb(231, 16, 16), rgba(0, 0, 0, 0));
    }

    .deal-container::after{
        right: 0;
        background: linear-gradient(to left, rgb(244, 13, 13), rgba(0, 0, 0, 0));
    } */

   
    
    






    .product{
        width: 100%;
        height: 25rem;
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
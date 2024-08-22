<template>
  
  <footer class="footer">
        <div class="footer-logo-container">
            <h2 class="logo">LOREM</h2>
            <hr width="100%" size="2" color="white">
            <div class="icon-container">
              <img src="~/assets/facebook.png" alt="" class="icon">
              <img src="~/assets/twitter.png" alt="" class="icon">
              <img src="~/assets/youtube.png" alt="" class="icon">
              <img src="~/assets/instagram.png" alt="" class="icon">
            </div>
        </div>
        <div class="footer-text-container">
            <div class="text-collumn">
                <h6 class="text-heading">LOREM</h6>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem ipsum</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
            </div>
            <div class="text-collumn">
                <h6 class="text-heading">LOREM</h6>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
            </div>
            <div class="text-collumn">
                <h6 class="text-heading">LOREM</h6>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
            </div>
            <div class="text-collumn">
                <h6 class="text-heading">LOREM</h6>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
            </div>
            <div class="text-collumn">
                <h6 class="text-heading">LOREM</h6>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem</p>
                <p class="text-main">lorem ipsum</p>
            </div>
        </div>
      
        
    </footer>
</template>


<style>
     .footer{
    width: 100%;
    height: 20rem;
    margin-left: -7rem;
    padding-left: 8rem;
    padding-right: 10rem;
    background-color: rgb(51, 45, 45);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-logo-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
  }

  .logo{
    font-size: 4rem;
    text-align: center;
    color: white;
    margin-bottom: -0.5rem;
  }

  .icon-container{
    display: flex;
    justify-content: center;

  }

  .icon{
    width: 3rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .footer-text-container{
    width: 30rem;
    margin-left: 3rem;
    margin-top: 3rem;
    display: flex;
    justify-content: space-evenly;
  }
  
  .text-collumn{
    width: max-content;
    color: white;
    justify-content: center;
  }

  .text-heading{
    font-size: 0.8rem;
    font-weight: lighter;
    margin-bottom: -0.5rem;
    color: rgba(255, 255, 255, 0.671);
  }

</style>
<template>
    <!-- loigin form -->
    <div class="login-form">
      <div>
        <form @submit.prevent="">
            <h1 class="login-title">LOGIN</h1>
            <div class="input-container">
                <label for="" class="input-label">Email</label>
                <input type="text" class="input-text">
            </div>
            <div class="input-container">
                <label for="" class="input-label">Password</label>
                <input type="text" class="input-text" >
            </div>
            <input type="submit">
        </form>
      </div>
        <div class="logbutton-container">
        <!-- login with github button -->
        <form @submit.prevent="login_github">
          <label for="github-submit"></label>
          <button type="submit" id="github-submit" class="logbutton github-button" onclick="config.public.login = 'true'"></button>
        </form>

        <form @submit.prevent="login_google">
          <label for="github-submit"></label>
          <button type="submit" class="logbutton google-button"></button>
        </form>

        <form @submit.prevent="login_github">
          <label for="github-submit"></label>
          <button type="submit" id="github-submit" class="logbutton"></button>
        </form>
      </div>


        <!-- DONT UNCOMMENT UNTIL YOU FIX LOGIN_EMAIL -->
        <!-- <form @submit.prevent="login_email">
          <input type="email" v-model="email">
          <button type="submit" id="email-submit">Email</button>
        </form> -->
    </div>
</template>
<script setup lang="ts">
  const config = useRuntimeConfig();
  const supabase = useSupabaseClient();
  const email = ref('')
  
  const login_github = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    if (error) {
      console.error(error);
    }
    else{
      config.public.login = "true"
      await  navigateTo("/")
    }
  }
  const login_google = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error(error);
    }
    else{
      config.public.login = "true"
      await  navigateTo("/")
    }
  }


  
</script>

<style>
    .login-title{
        font-size: 10vh;
        margin-bottom: -0.5rem;
        text-align: center;
    }
    .login-form{
        width: 20rem;
        height: 20rem;
        margin: 2rem;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        background-color: white;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        justify-content: center;
        align-self: center;
        align-content: center;
    }

    .input-text{
        width: 92%;
        
    }

    .logbutton-container{
      
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    .logbutton{
      width: 3rem;
      height: 3rem;
      margin-left: 0.5vw;
      margin-right: 0.5vw;
      border-radius: 10px;
      transition: 500ms ease-in-out;
    }

    .github-button{
      background-image: url("~/assets/github.png");
      background-size: cover;
      background-position: center;
    
      
    }

    .google-button{
      background-image: url("~/assets/google.png");
      background-size: cover;
      background-position: center;
    }

    .logbutton:hover{
      transform: scale(1.2);
      margin-left: 0.7vw;
      margin-right: 0.7vw;
      filter: invert(1);
    }

    

</style>
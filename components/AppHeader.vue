<template>
    <header>
        <div class="nav-bar">
            <div>
                <NuxtLink class="nav-item" to="/">Home</NuxtLink>
                <NuxtLink class="nav-item" to="/product">Product</NuxtLink>
                <NuxtLink class="nav-item" to="/tentang">About Us</NuxtLink>
                <p class="nav-item"> {{ $config.public.login }}</p>
            </div>
           
            <div v-if="user" class="user-container">
                <img class="user-profile":src="profile"/>
                <div class="username-container">
                    <div class="username">{{ name }}</div>
                </div>
            <form @submit.prevent="logout">
               <button type="submit" class="logout-button">Logout</button>
            </form>
            </div>
            <NuxtLink class="nav-item signIn" to="/login">Sign In</NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
    const config = useRuntimeConfig()
    console.log(config.myPublicVariable)
    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const login = config.public.login
    var signInHidden = ref("block");

    const name = computed(
    () => user?.value.user_metadata.full_name
    );
    const profile = computed(
    () => user?.value.user_metadata.avatar_url
    );

    if(login == "true"){
        signInHidden =  ref("none");                                                                                                                                          
    }

    else{
        signInHidden = ref("block");
    }

    const logout = async () => {
    const { error } = await supabase.auth.signOut();
    config.public.login = "true"
     if (error) {
    console.error(error);
    return;
     }

    await navigateTo('/login');
    };
</script>

<style>
    .user-container{
        height: 5vh;
        display: flex;
        flex-direction: row-reverse;
        margin-right: 2vw;
        align-content: center;
    }

    .user-profile{
        height: 6vh;
        border-radius: 100%;
        margin-left: 0.5vw;
    }

    .user-container{
        align-items: center;
    }

    .username{
        color: white;
        font-size: 1.2rem;
        text-align: center;
    }

    .signIn{
        display: v-bind(signInHidden);
    }
     

    .nav-bar{
        z-index: 1;
        position: fixed;
        margin-top: -1rem;
        margin-left: -1rem;
        /* padding-right: 3rem; */
        width: 100%;
        height: 3rem;
        padding: 1rem;
        background-color: rgb(51, 45, 45);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-item{
        margin-right: 1rem;
        margin-left: 1rem;
        margin-top: 0.5rem;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
    }

    .nav-item:hover{
        text-decoration-line: underline;
        text-decoration-style: solid;
    }
</style>
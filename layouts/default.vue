<template>
<div>
    <!-- <header>
        <div class="nav-bar">
            <NuxtLink class="nav-item" to="/">Home</NuxtLink>
            <NuxtLink class="nav-item" to="/product">Product</NuxtLink>
            <NuxtLink class="nav-item" to="/tentang">About Us</NuxtLink>
        </div>
    </header> -->
    <AppHeader />
    <main>
        <slot />
    </main>
    
    <AppFooter />
</div>
</template>

<style>
   body{
        background-color: black;
        overflow-x: hidden;
    }

    main{
        padding-top: 5rem;
        padding-left: 1rem;
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow-x: hidden;
    }
</style>
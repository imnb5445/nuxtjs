<template>
    <header>
        <div class="nav-bar">
            <NuxtLink class="nav-item" to="/">Home</NuxtLink>
            <NuxtLink class="nav-item" to="/product">Product</NuxtLink>
            <NuxtLink class="nav-item" to="/tentang">About Us</NuxtLink>
        </div>
    </header>
</template>

<style>
     

    .nav-bar{
        z-index: 1;
        position: fixed !important;
        margin-top: -1rem;
        margin-left: -1rem;
        width: 100%;
        height: 3rem;
        padding: 1rem;
        background-color: rgb(51, 45, 45);
        display: flex;
    }

    .nav-item{
        margin-right: 1rem;
        margin-left: 1rem;
        margin-top: 0.5rem;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
    }
</style>
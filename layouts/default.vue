<template>
<div>
    <header>
        <div class="nav-bar">
            <NuxtLink class="nav-item" to="/">Home</NuxtLink>
            <NuxtLink class="nav-item" to="/tentang">About Us</NuxtLink>
        </div>
    </header>
    <main>
        <slot />
    </main>
    
    <footer>
        
    </footer>
</div>
</template>

<style>
    main{
        padding: 1rem;
        padding-top: 5rem;
    }

    .nav-bar{
        position: fixed;
        margin-top: -1rem;
        margin-left: -1rem;
        width: 100%;
        height: 3rem;
        padding: 1rem;
        background-color: black;
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
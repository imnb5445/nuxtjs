<template>
    <div class="login-form">
        <form action="">
            <h1 class="login-title">LOGIN</h1>
            <div class="input-container">
                <label for="" class="input-label">Username</label>
                <input type="text" class="input-text" id="username-input">
            </div>
            <div class="input-container">
                <label for="" class="input-label">Password</label>
                <input type="text" class="input-text" id="password-input">
            </div>
            <input type="submit">
        </form>
    </div>
</template>

<script>

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
        display: flex;
        justify-content: center;
        background-color: white;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    .input-text{
        width: 15rem;
    }

</style>
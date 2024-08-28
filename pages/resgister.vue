<template>
    <div class="login-form">
        <form @submit.prevent="registerUser">
            <h1 class="login-title">LOGIN</h1>
            <div class="input-container">
                <label for="" class="input-label">Username</label>
                <input type="text" class="input-text" id="email-input" v-model="email" required >
            </div>
            <div class="input-container">
                <label for="" class="input-label">Password</label>
                <input type="text" class="input-text" id="password-input"  v-model="password" required >
            </div>
            <input type="submit">
        </form>
        <form action=""></form>
        <div v-if="successMsg" class="success-msg">{{ successMsg }}</div>
        <div v-if="errorMsg" class="error-msg">{{ errorMsg }}</div>
    </div>
</template>

<script setup>
    const supabase = useSupabaseClient()

    const loading = ref(false)
    const email = ref('')

    const handleLogin = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signInWithOtp({ email: email.value })
        if (error) throw error
        alert('Check your email for the login link!')
    } catch (error) {
        alert(error.error_description || error.message)
    } finally {
        loading.value = false
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
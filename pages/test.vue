<template>
    <div class="test-zone">
        <form @submit.prevent='testInsert'>
            <input type="text" class="test-input-text" id="test-input-name" v-model="test_text_name">
            <input type="text" class="test-input-text" id="test-input-price" v-model="test_text_price">
            <input type="submit" name="" id="test-submit" 
            onclick="document.getElementById('test-input-price').value = ''
            document.getElementById('test-input-name').value = ''">

            <div class="carosel-fading-test">
                <div class="fading-left">

                </div>
                <div class="carosel-test">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem nobis sit necessitatibus, praesentium, quis quos ad laboriosam animi, inventore vel omnis labore fugit harum sequi! Sapiente, atque aut? Maxime, perferendis?
                </div>
                <div class="fading-right">

                </div>
            </div>
        </form>
        <p>API Base URL: {{ $config.public.test }}</p>
        <p> {{ testChange }}</p>
        <p v-show="testChange2"></p>
        <form @submit.prevent='testButton'>
            <input type="submit">
        </form>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()
const supabase = useSupabaseClient()
const test_text_name = ref('')
const test_text_price = ref('')
var testChange = "aaaaa"
config.public.test = testChange
var testChange2 = config.public.test
const testInsert = async () => {
    const { error } = await supabase 
    .from('tb-produk')
    .insert({ nama_produk: test_text_name.value, harga: test_text_price.value})

    if(error.error){
        alert("insert failed")
    }
    else{
        alert("insert success")
    }

    document.getElementById("test-input-name").value = '';




}

const testButton = async () => {
    testChange = "ccccc"
    testChange2 = config.public.test
}
config.public.test = testChange
</script>

<style>
    .test-zone{
        width: 100%;
        height: 40rem;
        background-color: white;
    }

    .carosel-fading-test{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .carosel-test{
        width: 80%;
        height: 20vh;
    }
    
    .fading-left{
        width:10%;
        height: 10rem;
        background-color: red;
        margin-right: -10%;
        z-index: 1;
    }
</style>
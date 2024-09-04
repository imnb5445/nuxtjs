<template>
    <section class="product-data-container">
        <table class="product-data-table">
            <tr class="product-table-row">
                <th class="product-table-header">Id</th>
                <th class="product-table-header">Nama Produk</th>
                <th class="product-table-header">Harga</th>
            </tr>
            <tr class="product-table-row" v-for="product in products" :key="product.produk_id">
                <td class="product-table-item">{{ product.produk_id }}</td>
                <td class="product-table-item">{{ product.nama_produk }}</td>
                <td class="product-table-item">{{ product.harga }}$</td>
            </tr>
        </table>
    </section>
</template>

<script setup>
   const supabase = useSupabaseClient()
const products = ref([])

async function getProduct() {
  const { data } = await supabase.from('tb-produk').select()
  products.value = data


}

onMounted(() => {
  getProduct()
})
</script>
<style>
    .product-data-container{
        width: 100%;
        height: 50vh;
        background-color: white;
        /* display: flex;
        justify-content: center; */
    }

    .product-table-row:nth-child(even){
        background-color: rgb(152, 152, 152);
    }

    .product-data-table{
        border-collapse: collapse;
    }

    .product-table-header{
        border-bottom: black 1px solid;
    }

    .product-table-item{
        border-bottom: black 1px solid;
    }
</style>
<template>
    <section class="product-data-container">
        <table class="product-data-table">
            <tr class="product-table-row">
                <th class="product-table-header">Id</th>
                <th class="product-table-header">Nama Produk</th>
                <th class="product-table-header">harga</th>
            </tr>
            <tr class="product-table-row" v-for="product in products" :key="product.produk_id">
                <td class="product-table-item">{{ product.produk_id }}</td>
                <td class="product-table-item">{{ product.nama_produk }}</td>
                <td class="product-table-item">{{ product.harga }}$</td>
                <td>
                   <form @submit.prevent="GetProductById(product.produk_id, product.nama_produk, product.harga, 'edit_popUp')">
                        <button type="submit">edit</button>
                    </form>
                </td>
                <td>
                   <form @submit.prevent="DeleteProduct(product.produk_id)">
                        <button type="submit">Delete</button>
                    </form>
                </td>
            </tr>
        </table>
    </section>
    <div>
        <div>
            <form @submit.prevent="InsertProduct">
                <input type="text" v-model="input_nama">
                <input type="text" v-model="input_harga">
                <button type="submit">Insert</button>
            </form>
        </div>
    </div>

    <div class="edit-container popUp" data-popup="edit" id="edit_popUp">
        <div class="edit">
            <form @submit.prevent="editProduct">
                <input type="text" disabled v-model="edit_id">
                <input type="text" v-model="edit_nama">
                <input type="text" v-model="edit_harga">
                <button type="submit"></button>
            </form>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()
const products = ref([])
const input_nama = ref('')
const input_harga = ref('')
const edit_id = ref('')
const edit_nama = ref('')
const edit_harga = ref('')

async function DeleteProduct(x) {
    const response = await supabase
    .from('tb-produk')
    .delete()
    .eq('produk_id', x)

    getProduct()
}

async function InsertProduct() {
    const {data, error} = await supabase
    .from('tb-produk')
    .insert({ nama_produk: input_nama.value, harga: input_harga.value})

    getProduct()
}

async function GetProductById(x, y, z, a) {
    edit_id.value = x
    edit_nama.value = y
    edit_harga.value = z
    hiddenOff(a)
}

async function getProduct() {
  const { data } = await supabase
  .from('tb-produk')
  .select()
  .order('produk_id', { ascending: true })
  products.value = data
}

async function editProduct() {
    const { data } = await supabase.from('tb-produk')
    .update({nama_produk: edit_nama.value, harga: edit_harga.value})
    .eq ('produk_id', edit_id.value)

    getProduct()
    hiddenOn("edit_popUp")
}

async function hiddenOff(x) {
    document.getElementById(x).style.display = "block";
}
async function hiddenOn(x) {
    document.getElementById(x).style.display = "none";
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

    .popUp{
        display: none;
    }
</style>
<template>
    <section class="product-data-container">
        <table class="product-data-table">
            <tr class="product-table-header-row">
                <th class="product-table-header">Id</th>
                <th class="product-table-header">Nama Produk</th>
                <th class="product-table-header">Harga</th>
            </tr>
            <tr class="product-table-row">
                <th class="product-table-item">1</th>
                <th class="product-table-item">Ayam</th>
                <th class="product-table-item">500</th>
            </tr>
        </table>
    </section>
</template>


<style>
    .product-data-container{
        width: 100%;
        height: 50vh;
        background-color: white;
        /* display: flex;
        justify-content: center; */
    }

    .product-data-table{
        width: 100%;
        border: black 5px;
    }

    .product-table-header-row{
        width: 100%;
    }
</style>
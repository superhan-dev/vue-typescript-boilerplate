<template>
  <v-container>
    <h1>Shopping Cart</h1>
    <hr>
    <h2>Products</h2>
    <product-list />
    <hr>
    <shopping-cart />

  </v-container>
</template>

<script lang="ts">
import ProductList from '@/components/shop/ProductList.vue'
import ShoppingCart from '@/components/shop/ShoppingCart.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { ShoppingCart,ProductList },
})
</script>

<style scoped>

</style>
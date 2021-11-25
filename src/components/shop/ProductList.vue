<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script lang="ts">
import { CartActionTypes } from '@/store/modules/cart/actions'
import { ProductActionTypes } from '@/store/modules/product/actions'
import { Product } from '@/types'
import { ComputedRef, defineComponent } from 'vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    
    const products: ComputedRef<Product[]> = computed(() => store.state.product.items)

    const addProductToCart = (product:Product) => {
      console.log("addProductToCart",product);
      
      store.dispatch(`cart/${CartActionTypes.ADD_PRODUCT_TO_CART}`, product)
    }

    store.dispatch(`product/${ProductActionTypes.GET_ALL_PRODUCTS}`)


    return {
      products,
      addProductToCart,
    }
  }
})
</script>

<style scoped>

</style>
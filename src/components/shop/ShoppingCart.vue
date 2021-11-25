<template>
  <div>
    <h2>Your Cart</h2>
    <p v-show="!products.length">
      <i>Please add some Products to cart.</i>
    </p>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.title}} - {{ product.price }} X {{ product.quantity }}
      </li>
    </ul>
    <p>Total : {{total}} </p>
    <p>
      <button :disable="!products.length" @click="handleCheckout">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script lang="ts">
import { CartActionTypes } from '@/store/modules/cart/actions';
import { Cart } from '@/store/modules/cart/state';
import { defineComponent,computed, ComputedRef } from 'vue'
import {useStore} from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore();
    const checkoutStatus = computed(() => store.state.cart.checkoutStatus)
    const products : ComputedRef<Cart[]> = computed(() => store.getters[`cart/cartProducts`])

    const total = computed(() => store.getters[`cart/cartTotalPrice`])

    const handleCheckout = () => store.dispatch(`cart/${CartActionTypes.CHECKOUT}`,products)

    return {
      total,
      products,
      checkoutStatus,
      handleCheckout
    }
  }
})
</script>

<style scoped>

</style>
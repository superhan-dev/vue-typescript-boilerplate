import { GetterTree } from 'vuex';

import { RootState } from '@/store';

import { Cart, State } from './state';

export type Getters = {
  cartProducts(state: State, getters: any, rootState: RootState): Cart[] | null;
  cartTotalPrice(state: State, getters: any): number;
}

export const getters: GetterTree<State, RootState> & Getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.product.items.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total: number, product: Cart) => {

      return total + product.price * product.quantity
    }, 0)
  }
};



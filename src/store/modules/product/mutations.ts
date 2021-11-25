
import { Product } from '@/types';
import { MutationTree } from 'vuex';
import { State } from '.';


export enum ProductMutationTypes {
  SET_PRODUCTS = 'SET_PRODUCTS',
  DECREMENT_PRODUCT_INVENTORY = 'DECREMENT_PRODUCT_INVENTORY'
}

export type Mutations<S = State> = {
  [ProductMutationTypes.SET_PRODUCTS](state: S, payload: Product[]): void;
  [ProductMutationTypes.DECREMENT_PRODUCT_INVENTORY](state: S, payload: { id: number }): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [ProductMutationTypes.SET_PRODUCTS](state, products) {
    state.items = products;
  },
  [ProductMutationTypes.DECREMENT_PRODUCT_INVENTORY](state, { id }) {
    const product = state.items.find(product => product.id === id)
    if (product) {
      product.inventory--;
    }
  }
};
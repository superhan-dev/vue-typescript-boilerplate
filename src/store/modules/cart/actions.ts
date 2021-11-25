
import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '@/store';

import { Cart, State } from './state';
import { Mutations, CartMutationTypes } from './mutations';
import { Product } from '@/types';
import shop from '@/api/shop';
import { ProductMutationTypes } from '../product/mutations';

export enum CartActionTypes {
  CHECKOUT = 'CHECKOUT',
  ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
}

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, RootState>, 'commit'>

// Cart를 받아서 state에 저장한다.
// ShoppingCart.vue에서 카트에 담겨있는 상태를 표현한다.
export interface Actions {
  [CartActionTypes.CHECKOUT](
    { commit }: AugmentedActionContext,
    products: Cart[], // Obsolete in here but left as an example
  ): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [CartActionTypes.CHECKOUT]({ state, commit }, products: Cart[]) {
    const savedCartItems = [...state.items]
    // 체크아웃 상태를 변경한다.
    commit(CartMutationTypes.SET_CHECKOUT_STATUS, null);
    // 결제가 이루어지면 카트를 비운다.
    commit(CartMutationTypes.SET_CART_ITEMS, []);
    // 제품 주문 API 호출
    shop.buyProducts(
      products,
      () => commit(CartMutationTypes.SET_CHECKOUT_STATUS, 'successful'),
      () => {
        commit(CartMutationTypes.SET_CHECKOUT_STATUS, 'failed')
        commit(CartMutationTypes.SET_CART_ITEMS, savedCartItems);
      }
    )
  },

  [CartActionTypes.ADD_PRODUCT_TO_CART]({ state, commit }, product: Product) {
    commit(CartMutationTypes.SET_CHECKOUT_STATUS, null);
    if (product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id);
      if (!cartItem) {
        commit(CartMutationTypes.PUSH_PRODUCT_TO_CART, { id: product.id });
      } else {
        commit(CartMutationTypes.INCREMENT_ITEM_QUANTITY, cartItem);
      }

      commit(`products/${ProductMutationTypes.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true });
    }
  }
};

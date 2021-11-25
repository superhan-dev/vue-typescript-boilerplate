
import { MutationTree } from 'vuex';

import { Cart, CheckoutStatusType, State } from './state';


export enum CartMutationTypes {
  SET_CART_ITEMS = 'SET_CART_ITEMS', // cart items를 채우거나 비울때 사용한다.
  SET_CHECKOUT_STATUS = 'SET_CHECKOUT_STATUS', // 결제 상태를 변경한다.
  PUSH_PRODUCT_TO_CART = 'PUSH_PRODUCT_TO_CART', // 제품을 카트에 담는다.
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY', // 아이템 제고를 증가시킨다.
}

export type Mutations<S = State> = {
  [CartMutationTypes.SET_CART_ITEMS](state: S, payload: Cart[]): void;
  [CartMutationTypes.SET_CHECKOUT_STATUS](state: S, payload: CheckoutStatusType): void;
  [CartMutationTypes.PUSH_PRODUCT_TO_CART](state: S, { id }: { id: number }): void;
  [CartMutationTypes.INCREMENT_ITEM_QUANTITY](state: S, { id }: { id: number }): void;
}

export const mutations: MutationTree<State> & Mutations = {
  [CartMutationTypes.SET_CART_ITEMS](state: State, carts: Cart[]) {
    // cart를 비울때는 null을 설정한다.
    state.items = carts;
  },
  [CartMutationTypes.SET_CHECKOUT_STATUS](state: State, status: CheckoutStatusType) {
    state.checkoutStatus = status;
  },
  [CartMutationTypes.PUSH_PRODUCT_TO_CART](state: State, { id }: { id: number }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  [CartMutationTypes.INCREMENT_ITEM_QUANTITY](state: State, { id }: { id: number }) {
    const cartItem = state.items.find(item => item.id === id)
    if (cartItem?.quantity) {
      cartItem.quantity++
    }
  }
};

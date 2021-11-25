
import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '@/store';

import { State } from './state';
import { Mutations, LayoutMutationTypes } from './mutations';

export enum LayoutActionTypes {
  TOGGLE_DTAWER = 'TOGGLE_DTAWER',
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
  [LayoutActionTypes.TOGGLE_DTAWER]({ commit }: AugmentedActionContext,): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [LayoutActionTypes.TOGGLE_DTAWER]({ state, commit }) {
    // action이 실행되면 현재 drawer의 반대 값으로 설정한다.
    commit(LayoutMutationTypes.TOGGLE_DRAWER, !state.drawer);
  },

  // [LayoutActionTypes.ADD_PRODUCT_TO_CART]({ state, commit }, product: Product) {
  //   commit(CartMutationTypes.SET_CHECKOUT_STATUS, null);
  //   if (product.inventory > 0) {
  //     const cartItem = state.items.find(item => item.id === product.id);
  //     if (!cartItem) {
  //       commit(CartMutationTypes.PUSH_PRODUCT_TO_CART, { id: product.id });
  //     } else {
  //       commit(CartMutationTypes.INCREMENT_ITEM_QUANTITY, cartItem);
  //     }

  //     commit(`products/${ProductMutationTypes.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true });
  //   }
  // }
};

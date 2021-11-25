import { ActionTree, ActionContext } from 'vuex';

import { RootState } from '@/store';

import { State } from './state';
import { Mutations, ProductMutationTypes } from './mutations';
import shop from '@/api/shop';

export enum ProductActionTypes {
  GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
}

type AugmentActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, RootState>, 'commit'>


export interface Actions {
  [ProductActionTypes.GET_ALL_PRODUCTS]({ commit }: AugmentActionContext): void;
}

export const actions: ActionTree<State, RootState> & Actions = {
  [ProductActionTypes.GET_ALL_PRODUCTS]({ commit },) {
    shop.getProducts((products: any) => {
      commit(ProductMutationTypes.SET_PRODUCTS, products);
    })
  }
}
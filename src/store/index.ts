
import { createStore, Store as VuexStore, createLogger } from 'vuex'
import { State } from './modules/counter'

// import { store as documents, DocumentsStore, State as DocumentsState } from '@/store/modules/documents';
// // eslint-disable-next-line import/no-cycle
// import { store as profile, ProfileStore, State as ProfileState } from '@/store/modules/profile';

import { store as cart, CartStore, State as CartState } from '@/store/modules/cart';
import { store as product, ProductStore, State as ProductState } from '@/store/modules/product';
import { store as layout, LayoutStore, State as LayoutState } from '@/store/modules/layout';



export type GetterTypes = 'getters' | 'commit' | 'dispatch'

export type RootState = {
  cart: CartState;
  product: ProductState;
  layout: LayoutState;
}

export type Store =
  ProductStore<Pick<RootState, 'product'>>
  & CartStore<Pick<RootState, 'cart'>>
  & LayoutStore<Pick<RootState, 'layout'>>

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger({})] : [];

// plugins.push(createPersistedState({ store }))

export const store = createStore({
  plugins,
  modules: {
    cart,
    product,
    layout
  }
})

export function useStore(): Store {
  return store as Store
}
export interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}


export interface State {
  items: Product[];
}

// initial state
// shape: [{ id, quantity }]
export const state: State = {
  items: [],
};
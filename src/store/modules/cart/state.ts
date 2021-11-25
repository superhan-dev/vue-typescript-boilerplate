
export interface Cart {
  id: number;
  title?: string,
  price?: number,
  quantity: number;
}

export type CheckoutStatusType = null | "successful" | "failed";

// cart가 비워지면 null로 처리한다.
export interface State {
  items: Cart[];
  checkoutStatus: CheckoutStatusType
}

// initial state
// shape: [{ id, quantity }]
export const state: State = {
  items: [],
  checkoutStatus: null,
};
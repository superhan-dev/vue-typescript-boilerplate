import { Cart } from "@/store/modules/cart/state";
import { Product } from "@/store/modules/product/state";


const _products: Product[] = [
  { id: 1, title: "iPad 4 Mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-Shirt White", price: 10.99, inventory: 10 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 19.99, inventory: 5 },
];

export default {
  getProducts(handler: any) {
    setTimeout(() => handler(_products), 100);
  },

  buyProducts(products: Cart[], handler: any, errorHandler: any) {
    setTimeout(() => {
      Math.random() > 0.5 || navigator.webdriver ? handler() : errorHandler();
    }, 100);
  },
};

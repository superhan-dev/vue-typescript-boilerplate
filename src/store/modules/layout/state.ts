import { Menu } from "@/types";

export interface State {
  drawer: boolean;
  menus: Menu[];
}

export const state: State = {
  drawer: false,
  menus: [
    { path: '/', text: 'Home', icon: 'mdi-home' },
    { path: '/abput', text: 'About me', icon: 'mdi-account-multiple' },
    { path: '/shop', text: 'Shop', icon: 'mdi-cart-variant' },
    { path: '/todo', text: 'Todo', icon: 'mdi-clipboard-list-outline' },
  ],
};


//api파일들에 대해 interface를 정의하는 부분입니다.
export interface Menu {
  text: string;
  icon: string;
  path: string;
}

export interface Job {
  title: string,
  location: string,
  salary: number,
  id: string,
}

export type OrderTerm = 'title' | 'location' | 'salary'

export interface Product {
  id: number;
  title: string;
  price: number;
  inventory: number;
}

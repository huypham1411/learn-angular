import { Injectable } from '@angular/core';
import { Book } from '../type/Book';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Book[] = [];
  constructor() {}
  getCart() {
    return this.cart;
  }
  setCart(book: Book) {
    this.cart.push(book);
    console.log(
      '🚀 ~ file: cart.service.ts ~ line 15 ~ CartService ~ setCart ~ this.cart',
      this.cart
    );
  }
  removeCart(book: Book) {
    this.cart = this.cart.filter((x) => x.name !== book.name);
  }
}

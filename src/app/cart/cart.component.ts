import { Component, OnInit } from '@angular/core';
import { Book } from '../type/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private CartService: CartService) {
    this.cart = this.CartService.getCart();
    console.log(
      '🚀 ~ file: cart.component.ts ~ line 13 ~ CartComponent ~ constructor ~ this.cart',
      this.cart
    );
  }
  cart: Book[] = [];
  ngOnInit(): void {}
}

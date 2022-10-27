import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Book } from '../type/Book';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit, OnChanges {
  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();

  cart: Book[] = [];
  constructor(private CartService: CartService) {
    this.cart = CartService.getCart();
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('On Init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'onChange');
  }

  addToCart() {
    console.log(this.book);
    this.bookEmitter.emit(this.book);
  }

  isInCart(book: Book) {
    return this.CartService.getCart().some((x) => x.name === book.name);
  }

  removeFromCart(book: Book) {
    this.CartService.removeCart(book);
  }
}

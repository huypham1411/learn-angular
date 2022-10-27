import { Component, OnInit } from '@angular/core';
import { Book } from '../type/Book';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];
  constructor(private CartService: CartService) {
    this.createData();
  }

  createData = () => {
    for (let i = 0; i < 10; i++) {
      this.books.push({
        name: `Book ${i}`,
        author: `Author ${i}`,
        image: `image ${i}`,
      });
    }
  };

  addToCart(book: Book) {
    console.log(book);
    this.CartService.setCart(book);
  }

  ngOnInit(): void {}
}

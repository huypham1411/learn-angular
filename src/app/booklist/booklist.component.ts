import { Component, OnInit } from '@angular/core';
import { Book } from '../type/Book';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
})
export class BooklistComponent implements OnInit {
  books: Book[] = [];
  createData = () => {
    for (let i = 0; i < 10; i++) {
      this.books.push({
        name: `Book ${i}`,
        author: `Author ${i}`,
        image: `image ${i}`,
      });
    }
  };

  cart: Book[] = [];

  addToCart(book: Book) {
    console.log(book);
  }

  constructor() {
    this.createData();
  }

  ngOnInit(): void {}
}

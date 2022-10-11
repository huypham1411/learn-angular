import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  name = '';
  value = '';
  var1 = 0;
  var2 = 0;
  sum = 0;
  constructor() {}
  handleCalculateSum() {
    return (this.sum = this.var1 + this.var2);
  }
  onClick() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.name = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  ngOnInit(): void {}
}

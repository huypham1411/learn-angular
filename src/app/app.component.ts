import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  public name = 'K';
  public value = '';
  public var1 = 0;
  var2 = 0;
  public sum = 0;
  handleCalculateSum() {
    return (this.sum = this.var1 + this.var2);
  }
  onClick() {
    this.name = 'L';
  }
}

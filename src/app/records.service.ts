import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  info1: string[] = ['test1', 't001'];
  info2: string[] = ['test2', 't002'];
  info3: string[] = ['test3', 't003'];
  getInfo1() {
    return this.info1;
  }
  getInfo2() {
    return this.info2;
  }
  getInfo3() {
    return this.info3;
  }
  constructor() {}
}

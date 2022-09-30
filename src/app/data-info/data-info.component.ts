import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css'],
  providers: [RecordsService],
})
export class DataInfoComponent implements OnInit {
  infoRecieve1: string[] = [];
  infoRecieve2: string[] = [];
  infoRecieve3: string[] = [];

  getInfoService1() {
    this.infoRecieve1 = this.rservice.getInfo1();
  }
  getInfoService2() {
    this.infoRecieve2 = this.rservice.getInfo2();
  }
  getInfoService3() {
    this.infoRecieve3 = this.rservice.getInfo3();
  }

  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {}
}

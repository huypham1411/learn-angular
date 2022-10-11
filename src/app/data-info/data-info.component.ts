import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.scss'],
  providers: [RecordsService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataInfoComponent implements OnInit, OnChanges, OnDestroy {
  hide1 = true;
  hide2 = true;
  hide3 = true;
  infoRecieve1: string[] = [];
  infoRecieve2: string[] = [];
  infoRecieve3: string[] = [];
  data = '';
  getInfoService1() {
    this.hide1 = !this.hide1;
    this.infoRecieve1 = this.rservice.getInfo1();
  }
  getInfoService2() {
    this.infoRecieve2 = this.rservice.getInfo2();
  }
  getInfoService3() {
    this.infoRecieve3 = this.rservice.getInfo3();
  }
  handleAdd1(data: string) {
    // this.infoRecieve1.push(data);
    this.infoRecieve1 = [...this.infoRecieve1, data];
  }
  constructor(private rservice: RecordsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('onChanges', changes);
  }

  ngOnInit(): void {
    //if want to load data from API and want to display data on view you should place it here
    this.infoRecieve1 = [];
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}

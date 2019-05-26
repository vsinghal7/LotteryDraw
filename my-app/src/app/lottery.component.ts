import { Component, OnInit } from '@angular/core';
import { Lottery } from './lottery';
import { LotteryService } from './lottery.service';

@Component({
  selector: 'my-app',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.css']
})
export class LotteryComponent implements OnInit {
  lotteries: Lottery[];
  selectedLottery: Lottery;
  fetchingDraw = false;
  error: any;
  showNgFor = false;

  constructor(private lotteryService: LotteryService) {}

  public getDrawResults(): void {
    this.fetchingDraw = true;
    this.selectedLottery = null;
  }
  ngOnInit(): void {
    this.getDrawResults();
  }
}

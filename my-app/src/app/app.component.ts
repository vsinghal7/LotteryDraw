import { Component, OnInit } from '@angular/core';
import { Lottery } from './lottery';
import { LotteryInput } from './lotteryinput';
import { LotteryService } from './lottery.service';

@Component({
  templateUrl: './app.component.html',
  selector: 'app-root',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Lott';
  lotteries: Lottery[];
  selectedLottery: Lottery;
  fetchingDraw = false;

  constructor(private lotteryService: LotteryService) {}

  public getDrawResults(): void {
    this.lotteryService.drawresults();
    this.fetchingDraw = true;
    this.selectedLottery = null;
  }
}

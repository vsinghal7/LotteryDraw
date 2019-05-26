import { HttpHeaders } from '@angular/common/http';
import { Lottery } from './lottery';
import { LotteryInput } from './lotteryinput';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LotteryService {
  private drawURL = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/opendraws'; //End Point
  
  constructor(private http: HttpClient) {}

  drawresults()
  {
      let result = this.post();
      return result;
  }

private post() {
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post<Lottery>(this.drawURL,  {"CompanyId": "Tattersalls",
      "MaxDrawCount": 2,
      "OptionalProductFilter": [
        "Pools",
        "Super66"
      ]})
  }
}
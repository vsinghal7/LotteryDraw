import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LotteryService } from './lottery.service';
import { HttpClient, HttpHandler, HttpResponse } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotteryComponent } from './lottery.component';



@NgModule({
  declarations: [
    AppComponent, LotteryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LotteryService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

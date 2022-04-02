import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { TradeInDataService } from 'src/app/services/trade-in-data.service';

@Component({
  selector: 'app-info-submit-pg',
  templateUrl: './info-submit-pg.component.html',
  styleUrls: ['./info-submit-pg.component.css']
})
export class InfoSubmitPgComponent implements OnInit {

  tradeInData:any = {};
  images:any = {};
  user:any = {};
  product:any = {};

  constructor(
    private router:Router,
    private tradeInS:TradeInDataService,
    private db:DatabaseService
  ) { }

  ngOnInit(): void {
    this.getFullTradeInData();
  }

  checkPageDataValidity(){
    if(this.images == null || this.images == undefined || this.product == null || this.product == undefined || this.user == null || this.user == undefined)[
      this.router.navigate(['/'])
    ]
  }

  getFullTradeInData(){
    this.tradeInS.getFullTradeInData().subscribe((response:any) => {
      this.tradeInData = response;
      this.images = response.images;
      this.user = response.user;
      this.product = response.product;
      this.checkPageDataValidity()
    })
  }

  onCancelBtnClick(){
    this.tradeInS.deleteTradeInImagesData();
    this.router.navigate(['image-upload'])
  }

  onFullTradeInDataSubmit(){
    this.db.sendTradeInDataToFireBase(this.tradeInData)
    this.tradeInS.deleteFullTradeInData()
    this.router.navigate(['/'])
  }

}
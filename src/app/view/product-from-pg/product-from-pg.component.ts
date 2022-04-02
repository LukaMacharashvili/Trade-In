import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeInDataService } from 'src/app/services/trade-in-data.service';

@Component({
  selector: 'app-product-from-pg',
  templateUrl: './product-from-pg.component.html',
  styleUrls: ['./product-from-pg.component.css']
})
export class ProductFromPgComponent implements OnInit {

  constructor(
    private tradeInS:TradeInDataService,
    private router:Router
  ) { }

  carFormShow:boolean = false;
  techFormShow:boolean = false;

  productType!:any;

  ngOnInit(): void {
    this.checkPageDataValidity()
  }

  checkPageDataValidity(){
    this.tradeInS.getFullTradeInData().subscribe((response:any) => {
      if(response.product != null){
        this.router.navigate(['image-upload'])
      }else if (response.user == null){
        this.router.navigate(['/'])
      }else{
        return;
      }
    })
  }

  onProductTypeChange(event:any){
    let val = event.value;
    this.productType = val;
    if(val == 'car'){
      this.carFormShow = true;
      this.techFormShow = false;
    }else if(val == 'tech'){
      this.techFormShow = true;
      this.carFormShow = false;
    }
  }

  onCarFormSubmit(carData:any){
    carData.productType = this.productType;
    this.tradeInS.addTradeInProductData(carData)
    this.router.navigate(['image-upload'])
  }

  onTechFormSubmit(techData:any){
    techData.productType = this.productType;
    this.tradeInS.addTradeInProductData(techData)
    this.router.navigate(['image-upload'])
  }

  onCancelBtnClick(){
    this.tradeInS.deleteTradeInUserData();
    this.router.navigate(['/'])
  }

}

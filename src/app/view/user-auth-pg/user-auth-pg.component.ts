import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TradeInDataService } from 'src/app/services/trade-in-data.service';

@Component({
  selector: 'app-user-auth-pg',
  templateUrl: './user-auth-pg.component.html',
  styleUrls: ['./user-auth-pg.component.css']
})
export class UserAuthPgComponent implements OnInit {

  constructor(
    private tradeInS:TradeInDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.checkPageDataValidity()
  }

  checkPageDataValidity(){
    this.tradeInS.getFullTradeInData().subscribe((response:any) => {
      if(response.user != null){
        this.router.navigate(['product-form'])
      }else{
        return;
      }
    })
  }

  onUserFormSubmit(userData:any){
    console.log(userData)
    this.tradeInS.addTradeInUserData(userData)
    this.router.navigate(['product-form'])
  }
}

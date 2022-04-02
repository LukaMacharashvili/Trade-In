import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private db:AngularFireDatabase
  ) { }

  sendTradeInDataToFireBase(data:any){
    let productsRef = this.db.list('products/' + `${data.product.productType}`);
    productsRef.push(data)
  }
}

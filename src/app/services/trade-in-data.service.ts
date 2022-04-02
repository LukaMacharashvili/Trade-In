import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddFullTradeInData, addTradeInImagesData, addTradeInProductData, addTradeInUserData, deleteFullTradeInData, deleteTradeInImagesData, deleteTradeInProductData, deleteTradeInUserData } from '../actions/tradein.actions';

@Injectable({
  providedIn: 'root'
})
export class TradeInDataService {

  constructor(
    private store:Store<any>
  ) { 
    this.store.dispatch(new AddFullTradeInData())
  }

  getFullTradeInData(){
    return this.store.pipe(select('tradein' as any))
  }

  addTradeInUserData(userData:any){
    this.store.dispatch(new addTradeInUserData(userData))
  }

  addTradeInProductData(productData:any){
    this.store.dispatch(new addTradeInProductData(productData))
  }

  addTradeInImagesData(images:any){
    this.store.dispatch(new addTradeInImagesData(images))
  }

  deleteFullTradeInData(){
    this.store.dispatch(new deleteFullTradeInData({}))
  }

  deleteTradeInUserData(){
    this.store.dispatch(new deleteTradeInUserData(null))
  }

  deleteTradeInProductData(){
    this.store.dispatch(new deleteTradeInProductData(null))
  }

  deleteTradeInImagesData(){
    this.store.dispatch(new deleteTradeInImagesData(null))
  }
}

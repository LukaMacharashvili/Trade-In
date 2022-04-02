import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CloudinaryService } from 'src/app/services/cloudinary.service';
import { TradeInDataService } from 'src/app/services/trade-in-data.service';

@Component({
  selector: 'app-product-image-upload-pg',
  templateUrl: './product-image-upload-pg.component.html',
  styleUrls: ['./product-image-upload-pg.component.css']
})
export class ProductImageUploadPgComponent implements OnInit {

  images:any = {};
  currentImageSide:string = "";
  disabledSubmitBtn:boolean = false;

  constructor(
    private cloudinary:CloudinaryService,
    private tradeInS:TradeInDataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.checkPageDataValidity();
  }

  checkPageDataValidity(){
    this.tradeInS.getFullTradeInData().subscribe((response:any) => {
      if(response.images != null){
        this.router.navigate(['info-submit'])
      }else if (response.user == null || response.product == null){
        this.router.navigate(['/'])
      }else{
        return;
      }
    })
  }

  checkImagesQuantity(){
    let imagesList = Object.values(this.images);
    if(imagesList.length == 6){
      return true;
    }
    return false;
  }

  onImageUploadDivClick(imageInp:any, imageSide:any){
    imageInp.click()
    this.currentImageSide = imageSide;
  }

  onImageUpload(event:any){
    let self = this;
    let imageSide = this.currentImageSide;
    let reader = new FileReader();
    reader.onload = function(){
      self.cloudinary.uploadInCloudinary(reader.result).subscribe((response:any) => {
        self.images[`${imageSide}`] = response.url;
        self.disabledSubmitBtn = self.checkImagesQuantity();
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }

  onImagesFormSubmit(){
    this.tradeInS.addTradeInImagesData(this.images)
    this.router.navigate(['info-submit'])
  }

  onCancelBtnClick(){
    this.tradeInS.deleteTradeInProductData();
    this.router.navigate(['product-form'])
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoSubmitPgComponent } from './view/info-submit-pg/info-submit-pg.component';
import { ProductFromPgComponent } from './view/product-from-pg/product-from-pg.component';
import { ProductImageUploadPgComponent } from './view/product-image-upload-pg/product-image-upload-pg.component';
import { UserAuthPgComponent } from './view/user-auth-pg/user-auth-pg.component';

const routes: Routes = [
  {path:'', component:UserAuthPgComponent},
  {path:'product-form', component:ProductFromPgComponent},
  {path:'image-upload', component:ProductImageUploadPgComponent},
  {path:'info-submit', component:InfoSubmitPgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { UserAuthPgComponent } from './view/user-auth-pg/user-auth-pg.component';
import { NgMaterialModule } from './ng-material.module';
import { ProductFromPgComponent } from './view/product-from-pg/product-from-pg.component';
import { ProductImageUploadPgComponent } from './view/product-image-upload-pg/product-image-upload-pg.component';
import { InfoSubmitPgComponent  } from './view/info-submit-pg/info-submit-pg.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { TradeInReducer } from './reducer/tradein.reducer';
import { HttpClientModule } from '@angular/common/http'

@NgModule({ 
  declarations: [
    AppComponent,
    UserAuthPgComponent,
    ProductFromPgComponent,
    ProductImageUploadPgComponent,
    InfoSubmitPgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      tradein:(TradeInReducer.Reduce as ActionReducer<any>)
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

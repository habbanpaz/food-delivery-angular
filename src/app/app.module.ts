import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PractiseReactiveComponent } from './practise-reactive/practise-reactive.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    PractiseReactiveComponent,
    SellerAddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {SellerUpdateProductComponent} from './seller-update-product/seller-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    PractiseReactiveComponent,
    SellerAddProductComponent,
    SellerUpdateProductComponent,
    FooterComponent,
    CartPageComponent,
    CheckoutComponent,
    UserAuthComponent,
    SearchComponent,
    ProductDetailsComponent
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule { }

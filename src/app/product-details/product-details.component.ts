import { Component, OnInit } from '@angular/core';
import { Product } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData: undefined | Product
  productQuantity:number=1;
  removeCart=false;
  cartData:Product|undefined;

  constructor(private activeRoute:ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.warn(productId)
    productId && this.product.getProduct(productId).subscribe((result)=>{
      console.warn(result);
      this.productData = result
      // let cartData = localStorage.getItem('localCart');
      // if (productId && cartData) {
      //   let items = JSON.parse(cartData)
      //   items = items.filter((item:Product)=>productId=== item.id.toString())
      // if (items.length) {
      //   this.removeCart=true
      // } else {
      //   this.removeCart=false
      // }
      // }
    })
  }

  handleQuantity(val:string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity+=1;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1;
    }
  }

}

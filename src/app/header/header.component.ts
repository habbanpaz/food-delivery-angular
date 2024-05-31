import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Product } from '../data-type';
import { ProductService } from '../services/product.service';
ProductService

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  menuType: String='default'
  sellerName:string=''
  userName:string="";
  searchResult:undefined|Product[];
  searchQuery: string = ''; // Search query
  products: Product[] = []; // Array to hold all products
  cartItems=0;

  constructor(private route: Router, private product:ProductService) {
    this.product.productList().subscribe({
      next: (products: Product[]) => {
        this.products = products;
      },
      error: (error) => {
        // Handle error
        console.error(error);
      }
    });
   }

  ngOnInit(): void {
    this.route.events.subscribe((val:any)=>{
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          console.warn("in seller area")
          if (localStorage.getItem('seller')) {
            let sellerStore=localStorage.getItem('seller')
            let sellerData = sellerStore && JSON.parse(sellerStore)[0]
            this.menuType='seller'
            this.sellerName = sellerData.name;
          }
        }else{
          console.warn("outside the seller's area")
          this.menuType='default'
        }
      }
    })
  }

  searchProducts() {
    if (this.searchQuery.trim() !== '') {
      // Filter products based on the search query
      this.products = this.products.filter(product =>
        Object.values(product).some(value =>
          value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    }
  }

  logout(){
    localStorage.removeItem('seller')
    this.route.navigate(['/']);
  }

}

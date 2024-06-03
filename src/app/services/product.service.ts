import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../data-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: Product) {
    console.warn("service called");
    return this.http.post('http://localhost:3000/products',data)
  }

  productList(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products')
  }

  
  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  
  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  popularProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=8');
  }

  searchProducts(query: string) {
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);
  }
  


}

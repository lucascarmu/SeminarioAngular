import { Injectable } from '@angular/core';
import { Product } from './product-list/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private originalProducts: Product[] = [];
  private _products: Product[] = [];
  products: BehaviorSubject<Product[]> = new BehaviorSubject(this._products);

  addToCart(product: Product) {
    let item: Product = this._products.find(p => p.name === product.name)!;
    if (!item) {
      this._products.push({... product});
      this.originalProducts.push(product);
    }else {
      item.quantity += product.quantity;
    }
    this.products.next(this._products);
  }

  removeFromCart(product: Product) {
    let item: Product = this._products.find(p => p.name === product.name)!;
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      let index = this._products.indexOf(item);
      this._products.splice(index, 1);
    }
    product.stock += 1;
    this.originalProducts.find(p => p.name === product.name)!.stock += 1;
    this.products.next(this._products);
  }
  

  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cartList: Product[] = [];
  total: number = 0;
  constructor(private cart: CartService) { 
    cart.products.subscribe(response => this.cartList = response);
  }

  getTotal(): number {
    this.total = 0;
    this.cartList.forEach(product => {
      this.total += product.price * product.quantity;
    });
    return this.total;
  }
  removeFromCart(product: Product): void {
    this.cart.removeFromCart(product);
  }

  ngOnInit(): void { 
  }
}

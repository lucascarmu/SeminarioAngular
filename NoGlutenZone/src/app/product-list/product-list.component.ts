import { Component } from '@angular/core';
import { Product } from './Product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = [
    {
      "name": "Gluten Free Bread",
      "price": 3.99,
      "description": "A delicious loaf of gluten free bread.",
      "image": "assets/images/gluten-free-bread.jpg",
      "stock": 10,
      "quantity": 0
    },
    {
      "name": "Gluten Free Muffin",
      "price": 2.99,
      "description": "A delicious gluten free muffin.",
      "image": "assets/images/gluten-free-muffin.jpg",
      "stock": 5,
      "quantity": 0
    },
    {
      "name": "Gluten Free Cookie",
      "price": 1.99,
      "description": "A delicious gluten free cookie.",
      "image": "assets/images/gluten-free-cookie.jpg",
      "stock": 15,
      "quantity": 0
    },
    {
      "name": "Gluten Free Brownie",
      "price": 2.99,
      "description": "A delicious gluten free brownie.",
      "image": "assets/images/gluten-free-brownie.jpg",
      "stock": 0,
      "quantity": 0 
    }
  ];

  cartList: Product[] = [];
  constructor(private cart: CartService) { 
    cart.products.subscribe(response => this.cartList = response);
    this.updateStocks();
  }

  ngOnInit(): void {
    
  }

  addToCart(product: Product): void {
    if (product.quantity === 0) {
      return;
    }
    this.cart.addToCart(product);
    product.stock -= product.quantity;
    product.quantity = 0;
  }  

  updateStocks(): void {
    this.products.forEach(product => {
      let item: Product = this.cartList.find(p => p.name === product.name)!;
      if (item) {
        product.stock -= item.quantity;
      }
    });
  }
}

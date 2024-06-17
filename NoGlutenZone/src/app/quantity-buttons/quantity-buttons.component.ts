import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-buttons',
  templateUrl: './quantity-buttons.component.html',
  styleUrl: './quantity-buttons.component.scss'
})
export class QuantityButtonsComponent implements OnInit{

  constructor() { }

  @Input()
  quantity!: number;
  
  @Input()
  max!: number;
  
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  
  ngOnInit(): void {
  }
  increaseQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}

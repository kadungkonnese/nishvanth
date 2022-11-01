import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { Cart1 } from '../shared/models/cart1';
import { CartItem } from '../shared/models/cartItem';
import { CartItem1 } from '../shared/models/cartItem1';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
cart!:Cart;
cart1!:Cart1;
  constructor(private cartService: CartService) { 
    this.setCart();
    this.setCart1();
  }

  ngOnInit(): void {
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
    
  }

  setCart1(){
    this.cart1 = this.cartService.getCart1();
  }
}

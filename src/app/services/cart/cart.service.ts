import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { Cart1 } from 'src/app/shared/models/cart1';
import { CartItem } from 'src/app/shared/models/cartItem';
import { CartItem1 } from 'src/app/shared/models/cartItem1';
import { Food } from 'src/app/shared/models/Food';
import { Ring } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
private cart1:Cart1 = new Cart1();

  constructor() { }

  addToCart(food: Food):void{
    let cartItem =this.cart.items.find(item => item.food.id === food.id);
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity +1);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }
  addToCart1(ring: Ring):void{
    let cartItem1 = this.cart1.items.find(item => item.ring.id === ring.id);
    if (cartItem1) {
      this.changeQuantity(ring.id, cartItem1.quantity +1);
      return;
    }
    this.cart1.items.push(new CartItem1(ring));
  }
  removeFromCart(foodId:number): void{
    this.cart.items =
    this.cart.items.filter(item => item.food.id != foodId);
  }
  changeQuantity(foodId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
    
  }
  getCart1():Cart1{
    return this.cart1;
  }
  }


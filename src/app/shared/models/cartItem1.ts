import { Ring } from "./Food";

export class CartItem1{
  constructor(ring:Ring){
    this.ring = ring;
    
  }
  ring:Ring;
  quantity:number = 1;

  get price():number{
    return this.ring.price * this.quantity;
  }
}
import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return [
      {
          id:1,
          name:'Gold Plated Hoop ',
          price:10000,
          tags:['FastFood','Hamburger'],
          favourite:true,
          stars: 4.5,
          imageUrl:'/assets/images/Earrings/earrings1.jpg',
          origins:['italy'],
          cookTime:'10-15'
      },
      {
        id:2,
        name:'Senco Gold',
        price:25000,
        tags:['FastFood','Hamburger'],
        favourite:false,
        stars: 4.0,
        imageUrl:'/assets/images/Earrings/earrings2.jpg',
        origins:['italy'],
        cookTime:'10-15'
    },
    {
      id:3,
      name:'Traditional Alloy Gold',
      price:18000,
      tags:['FastFood','Hamburger'],
      favourite:false,
      stars: 4.5,
      imageUrl:'/assets/images/Earrings/earrings3.jpg',
      origins:['italy'],
      cookTime:'10-15'
  },
   ]
    
}





}

import { Injectable } from '@angular/core';
import { Ring } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class RingService {

  constructor() { }
  getRingById(id: number): Ring{
return this.getAll().find(ring => ring.id == id)!;
  }
  getAll():Ring[]{
    return[
      {
        id:1,
        name:'The Avalee',
        price:5000,
        imageUrl: '/assets/images/Rings/rings1.jpg',
      },
      {
        id:2,
        name:'Cubic Zircona',
        price:9000,
        imageUrl: '/assets/images/Rings/rings2.jpg',
      },
      {
        id:3,
        name:'Vinatage Ring',
        price:8500,
        imageUrl: '/assets/images/Rings/rings3.jpg',
      }

    ]
      }
     
   
  }



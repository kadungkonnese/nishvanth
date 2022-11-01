import { Injectable } from '@angular/core';
import { Necklaces } from 'src/app/shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class NecklacesService {

  constructor() { }
  getAll():Necklaces[]{
    return[
      {
        id:1,
        name:'Pearl Gold',
        price:5000,
        imageUrl: '/assets/images/Necklaces/neck1.jpg',
      },
      {
        id:2,
        name:'Kundan Necklaces',
        price:9000,
        imageUrl: '/assets/images/Necklaces/neck2.jpg',
      },
      {
        id:3,
        name:'Mansiyaorange',
        price:8500,
        imageUrl: '/assets/images/Necklaces/neck3.jpg',
      }

    ]
      }
     
   
  }

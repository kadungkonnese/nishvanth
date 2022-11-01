import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food, Ring, Necklaces } from '../shared/models/Food';
import { RingService } from '../services/ring/ring.service';
import { NecklacesService } from '../services/necklaces/necklaces.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = ['../../assets/images/carimage/carlouse1.jpg','../../assets/images/carimage/carlouse2.jpg','../../assets/images/carimage/carlouse3.jpg'];
  active = 'top';
foods:Food[] = [];
rings:Ring[] = [];
necklaces:Necklaces[] = [];
  constructor(private foodService:FoodService,private ringService:RingService,private necklaceService:NecklacesService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
    this.rings = this.ringService.getAll();
    this.necklaces = this.necklaceService.getAll();
  }

}

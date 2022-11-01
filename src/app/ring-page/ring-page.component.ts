import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { RingService } from '../services/ring/ring.service';
import { Ring } from '../shared/models/Food';

@Component({
  selector: 'app-ring-page',
  templateUrl: './ring-page.component.html',
  styleUrls: ['./ring-page.component.css']
})
export class RingPageComponent implements OnInit {

  ring!: Ring;

  constructor(private activatedRoute:ActivatedRoute,
    private ringService: RingService,
    private cartService: CartService,
    private router: Router) { 
      activatedRoute.params.subscribe((params) => {
      if(params['id'])

      this.ring = ringService.getRingById(params['id']);
    }) }

  ngOnInit(): void {
  }
  addToCart1(){
    this.cartService.addToCart1(this.ring);
    this.router.navigateByUrl('/cart-page');
  }
}

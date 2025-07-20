import { Component } from '@angular/core';
import { Sneaker } from '../../models/sneaker.model';
import { SneakerDataService } from '../../services/sneaker-data.service';
import { SneakerCartService } from '../../services/sneaker-cart.service';

@Component({
  selector: 'app-sneakers-list',
  standalone: false,
  templateUrl: './sneakers-list.component.html',
  styleUrl: './sneakers-list.component.scss',
})
export class SneakersListComponent {
  sneakers: Sneaker[] = [];

  constructor(
    private cart : SneakerCartService,
    private sneakerService: SneakerDataService) {
  }

  ngOnInit() : void {
    this.sneakerService.getAll()
      .subscribe(sneakers => this.sneakers = sneakers);
  }

  addToCart(sneaker : Sneaker) : void {
    this.cart.addToCart(sneaker);
    sneaker.stock = Math.max(0, sneaker.stock - sneaker.quantity);
    sneaker.quantity = 0;
  }
}

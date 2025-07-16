import { Component } from '@angular/core';
import { SneakerCartService } from '../sneaker-cart.service';
import { Sneaker } from '../models/sneaker.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartList$: Observable<Sneaker[]> = new Observable();

  constructor(private cart: SneakerCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  removeFromCart(_t7: Sneaker) {
    throw new Error('Method not implemented.');
  }
}

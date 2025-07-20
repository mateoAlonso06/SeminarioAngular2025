import { Component } from '@angular/core';
import { SneakerCartService } from '../sneaker-cart.service';
import { Sneaker } from '../models/sneaker.model';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  cartList$: Observable<Sneaker[]> = new Observable();

  hasItems$: Observable<boolean>;

  constructor(private cart: SneakerCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this.hasItems$ = this.cartList$.pipe(
      map((items) => items.length > 0)
    );
  }

  onRemove(sneaker: Sneaker) {
    this.cart.removeFromCart(sneaker);
  }

  onBuy() {
    // TODO: hacer enrutamiento hacia el formulario
  }
}

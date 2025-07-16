import { Injectable } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';
import { BehaviorSubject } from 'rxjs';

/*maneja la logica del carrito*/
@Injectable({
  providedIn: 'root',
})
export class SneakerCartService {
  private _cartList : Sneaker[] = [];
  cartList : BehaviorSubject<Sneaker[]> = new BehaviorSubject(this._cartList);

  constructor() {}

  addToCart(sneaker: Sneaker) {
    if (!this.existeProducto(sneaker)) {
      this._cartList.push({...sneaker});
    } else {
      sneaker.quantity += sneaker.quantity;
    }
    this.cartList.next(this._cartList); // equivalente al emit de eventos
  }

  private existeProducto(sneaker: Sneaker): boolean {
    return this._cartList.some(sn => sn.name === sneaker.name);
  }
}

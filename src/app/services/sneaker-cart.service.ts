import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sneaker } from '../models/sneaker.model';

@Injectable({
  providedIn: 'root',
})
export class SneakerCartService {
  private _cartList: Sneaker[] = [];
  cartList: BehaviorSubject<Sneaker[]> = new BehaviorSubject(this._cartList);

  constructor() {}
  addToCart(sneaker: Sneaker) {
    // Busco si ese sneaker ya está en el carrito
    const productoExistente = this._cartList.find(item => item.name === sneaker.name);

    if (productoExistente) {
      productoExistente.quantity += sneaker.quantity;
    } else {
      this._cartList.push({ ...sneaker });
    }
  }

  removeFromCart(sneaker: Sneaker) {
    const idx = this._cartList.findIndex((s) => s.name === sneaker.name);
    if (idx > -1) {
      this._cartList.splice(idx, 1);
      this.cartList.next([...this._cartList]);
    }
  }

  private existeProducto(sneaker: Sneaker): boolean {
    return this._cartList.some((sn) => sn.name === sneaker.name);
  }
}

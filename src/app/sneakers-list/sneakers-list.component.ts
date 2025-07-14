import { Component } from '@angular/core';
import { Sneaker } from '../models/sneaker.model';

@Component({
  selector: 'app-sneakers-list',
  standalone: false,
  templateUrl: './sneakers-list.component.html',
  styleUrl: './sneakers-list.component.scss',
})
export class SneakersListComponent {
  sneakers: Sneaker[] = [
    {
      name: 'New Balance 550',
      type: 'basketball',
      price: 150,
      stock: 10,
      image: 'assets/img/sneakers/nb_550.webp',
      clearence: false,
      quantity: 0,
    },
    {
      name: 'Puma RS-X',
      type: 'casual',
      price: 100,
      stock: 2,
      image: 'assets/img/sneakers/puma_rs_x.jpg',
      clearence: false,
      quantity: 0,
    },
    {
      name: 'Adidas UltraBoost',
      type: 'trainig',
      price: 150,
      stock: 15,
      image: 'assets/img/sneakers/adidas_ub.webp',
      clearence: true,
      quantity: 0,
    },
    {
      name: 'Nike Air Zoom Pegasus',
      type: 'running',
      price: 120,
      stock: 0,
      image: 'assets/img/sneakers/nike_air_zoom_pegasus.jpg',
      clearence: false,
      quantity: 0,
    },
  ];

  public upQuantity(sneaker: Sneaker): void {
    if (sneaker.stock != 0) {
      sneaker.quantity++;
      sneaker.stock--;
    }
  }

  public downQuantity(sneaker: Sneaker): void {
    if (sneaker.quantity > 0) {
      sneaker.quantity--;
      sneaker.stock++;
    }
  }

  onChangeQuantity(s: Sneaker): void {
    let q = Number(s.quantity) || 0;

    if (q < 0) {
      q = 0;
    } else if (q > s.stock) {
      q = s.stock;
    }

    s.quantity = q;
    s.stock = s.stock - s.quantity;
    this.updateCartSummary();
  }

  private updateCartSummary(): void {
    const totalItems = this.sneakers
      .map((s) => s.quantity)
      .reduce((sum, qty) => sum + qty, 0);
    console.log(`Total items en carrito: ${totalItems}`);
  }
}

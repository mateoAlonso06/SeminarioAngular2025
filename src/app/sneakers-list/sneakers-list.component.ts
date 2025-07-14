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
}

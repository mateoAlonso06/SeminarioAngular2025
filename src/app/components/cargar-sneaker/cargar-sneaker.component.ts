import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargar-sneaker',
  standalone: false,
  templateUrl: './cargar-sneaker.component.html',
  styleUrl: './cargar-sneaker.component.scss'
})
export class CargarSneakerComponent {
  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigate(['/buy']);
  }
}

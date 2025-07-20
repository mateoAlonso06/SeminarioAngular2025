import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buy-form',
  standalone: false,
  templateUrl: './buy-form.component.html',
  styleUrl: './buy-form.component.scss'
})
export class BuyFormComponent {
  formBuyApp = new FormGroup() {

  }
}

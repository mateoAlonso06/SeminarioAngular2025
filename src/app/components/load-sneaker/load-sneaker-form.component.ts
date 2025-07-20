import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SneakerDataService } from '../../services/sneaker-data.service';
import { Sneaker } from '../../models/sneaker.model';

@Component({
  selector: 'app-buy-form',
  standalone: false,
  templateUrl: 'load-sneaker-form.component.html',
  styleUrls: ['./load-sneaker-form.component.scss'],
})
export class LoadSneakerComponent {
  @Output() formSubmitted = new EventEmitter<Sneaker>();

  formNewSneaker = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    type: new FormControl<string>('', [Validators.required]),
    imageUrl: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/.+/),
    ]),
    price: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    stock: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
  });

  constructor(private sneakerService: SneakerDataService) {}

  onSubmit() {
    if (this.formNewSneaker.invalid) {
      this.formNewSneaker.markAllAsTouched();
      return;
    }

    const payload = {
      name: this.formNewSneaker.value.name!,
      type: this.formNewSneaker.value.type!,
      price: this.formNewSneaker.value.price!,
      stock: this.formNewSneaker.value.stock!,
      image: this.formNewSneaker.value.imageUrl!,
    };

    this.sneakerService.createSneaker(payload).subscribe({
      next: (created) => {
        const sneaker: Sneaker = { ...created, quantity: 0 };
        console.log('Sneaker creado:', sneaker);
        this.formSubmitted.emit(sneaker);

        this.formNewSneaker.reset({
          name: '',
          type: '',
          imageUrl: '',
          price: 0,
          stock: 0,
        });
      },
      error: (err) => {
        console.error('Error al crear sneaker:', err);
      },
    });
  }
}

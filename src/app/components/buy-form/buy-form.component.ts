import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buy-form',
  standalone: false,
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.scss'],
})
export class BuyFormComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  formNewSneaker = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    image: new FormControl<File | null>(null, [Validators.required])
  });

  selectedFile = false;
  imageError = false;

  constructor() {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = false;
      this.imageError = true;
      this.formNewSneaker.get('image')!.setValue(null);
      return;
    }

    const file = input.files[0];
    if (!file.type.startsWith('image/')) {
      this.selectedFile = false;
      this.imageError = true;
      this.formNewSneaker.get('image')!.setValue(null);
      return;
    }

    this.selectedFile = true;
    this.imageError = false;
    this.formNewSneaker.get('image')!.setValue(file);
  }

  onSubmit() {
    if (this.formNewSneaker.invalid) {
      this.formNewSneaker.markAllAsTouched();
      return;
    }

    const payload = {
      name: this.formNewSneaker.value.name!,
      type: this.formNewSneaker.value.type!,
      image: this.formNewSneaker.value.image!,
      price: 0,
      stock: 0,
      sales: 0,
    };

    console.log('Nuevo sneaker:', payload);
    this.formSubmitted.emit(payload);

    this.formNewSneaker.reset({
      name: '',
      type: '',
      image: null,
      price: 0,
      stock: 0,
      sales: 0,
    });
    this.selectedFile = false;
  }
}

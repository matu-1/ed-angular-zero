import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-reactive',
  templateUrl: './create-reactive.component.html',
  styleUrls: ['./create-reactive.component.css'],
})
export class CreateReactiveComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      price: new FormControl(null, [Validators.required, this.minPrice(10)]),
      image: new FormControl(null),
    });
  }

  minPrice(minPrice: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      console.log('minPrce', control.value);
      if (control.value && control.value < minPrice) return { minPrice: true };
      return null;
    };
  }

  handleSubmit() {
    console.log('form', this, this.form);
  }
}

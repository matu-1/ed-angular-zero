import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Curso } from '../curso';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  @ViewChild('form', { static: false })
  form!: FormControl;
  curso: Curso = {};

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log('data', this.curso);
      this.form.reset();
    }
  }
}

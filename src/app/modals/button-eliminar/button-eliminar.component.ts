import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-button-eliminar',
  templateUrl: './button-eliminar.component.html',
  styleUrls: ['./button-eliminar.component.css'],
})
export class ButtonEliminarComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}
  onEnviar(eventEliminar: Event) {
    eventEliminar.preventDefault;
    if (this.form.valid) {
      alert('login en proceso');
    } else {
      this.form.markAllAsTouched();
    }
  }
}

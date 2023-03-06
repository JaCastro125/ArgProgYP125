import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-imagen-perfil',
  templateUrl: './imagen-perfil.component.html',
  styleUrls: ['./imagen-perfil.component.css'],
})
export class ImagenPerfilComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {}
  Guardar(eventImagen: Event) {
    eventImagen.preventDefault;
    if (this.form.valid) {
      alert('login en proceso');
    } else {
      this.form.markAllAsTouched();
    }
  }
}

import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ProfesionPipe } from '../../pipes/profesion.pipe';
import { EdadPipe } from '../../pipes/edad.pipe';


@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,ProfesionPipe,EdadPipe],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css',
})
export class RegistroUsuarioComponent {
  enviado: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {}
  registroForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    profesion: ['', Validators.required],
    fechaNacimiento: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  registrar=()=>{
    if (this.registroForm.valid) {
      this.enviado=true;
      console.log(this.registroForm.value);
      alert('Registro exitoso');
    }else{
      this.registroForm.markAllAsTouched();
    }
  }
  campoSinllenar = () => {
    return (
      !this.enviado &&
      Object.values(this.registroForm).some((valor) => valor.trim ?? '')
    );
  };
}

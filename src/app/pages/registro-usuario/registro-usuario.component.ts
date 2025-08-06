import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-usuario.component.html',
  styleUrl: './registro-usuario.component.css',
})
export class RegistroUsuarioComponent {
  enviado: boolean = false;
  registroUser = {
    nombre: '',
    profesion: '',
    email: '',
    fechaNacimiento: '',
    password: '',
  };
  campoSinllenar = () => {
    return (
      !this.enviado &&
      Object.values(this.registroUser).some((valor) => valor.trim ?? '')
    );
  };
}

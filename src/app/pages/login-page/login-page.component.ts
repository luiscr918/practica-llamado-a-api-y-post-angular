import { Component } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';
  constructor(
    private authServicio: AutenticacionService,
    private router: Router
  ) {}
  login = () => {
    const sesionExitosa = this.authServicio.validarUsuario(
      this.usuario,
      this.password
    );
    if (sesionExitosa) {
      const redireccion = localStorage.getItem('redirectUrl') || '/empleados';
      localStorage.removeItem('redirectUrl');
      this.router.navigateByUrl(redireccion);
    }else{
      this.error='Credenciales incorrectas';
    }
  };
}

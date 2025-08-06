import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  constructor(http: HttpClient) {
    //obtener el usuario y la password de el json
    http.get<Usuario>('assets/usuario.json').subscribe((data) => {
      this.usuarioValido = {
        usuario: data.usuario,
        password: data.password,
      };
    });
  }
  private usuarioValido: Usuario = {
    usuario: '',
    password: '',
  };
  validarUsuario = (usuario: string, password: string): boolean => {
    if (
      usuario === this.usuarioValido.usuario &&
      password === this.usuarioValido.password
    ) {
      localStorage.setItem('user', usuario);
      return true;
    } else {
      return false;
    }
  };
  sesionIniciada = (): boolean => {
    return localStorage.getItem('user') !== null;
  };
  logOut = (): void => {
    localStorage.removeItem('user');
  };
}

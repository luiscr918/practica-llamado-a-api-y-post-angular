import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
 constructor( private servicioLogin:AutenticacionService,
  private router:Router
 ){}

/*  sesionActiva:boolean=this.servicioLogin.sesionIniciada(); */
 cerrarSesion=()=>{
  this.servicioLogin.logOut();
  this.router.navigate(['/']);

 }
}

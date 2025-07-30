import { Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css',
})
export class RegistroClienteComponent {
  constructor(private clienteServicio: ClientesService) {}
  nombre:string='';
  direccion:string='';
  email:string='';

  agregarCliente(formulario:any){
    this.clienteServicio.guardarCliente(formulario.value).subscribe(()=>{
      window.location.reload();
    })
  }
}

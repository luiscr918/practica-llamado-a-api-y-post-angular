import { Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css'
})
export class ListaClientesComponent {
  constructor(private servicioCliente:ClientesService){};
  clientes:any=[];
  ngOnInit(){
    this.servicioCliente.leerClientes().subscribe(data=>{
      this.clientes=Object.values(data);
    })
  }
}
//no usar any muchachos

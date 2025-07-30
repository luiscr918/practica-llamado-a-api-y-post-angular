import { Component } from '@angular/core';
import { RegistroClienteComponent } from "../../components/clientesComponents/registro-cliente/registro-cliente.component";
import { ListaClientesComponent } from "../../components/clientesComponents/lista-clientes/lista-clientes.component";

@Component({
  selector: 'app-clientes-page',
  standalone: true,
  imports: [RegistroClienteComponent, ListaClientesComponent],
  templateUrl: './clientes-page.component.html',
  styleUrl: './clientes-page.component.css'
})
export class ClientesPageComponent {

}

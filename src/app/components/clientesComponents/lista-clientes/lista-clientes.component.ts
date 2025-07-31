import { Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-clientes.component.html',
  styleUrl: './lista-clientes.component.css',
})
export class ListaClientesComponent {
  constructor(private servicioCliente: ClientesService) {}
  clientes: any = [];
  ngOnInit() {
    this.servicioCliente.leerClientes().subscribe(data => {
      this.clientes = Object.keys(data).map((key) => ({
        id: key, ...data[key]
      }));
    });
  }
  eliminarClient = (id: string) => {
    this.servicioCliente.eliminarCliente(id).subscribe(()=>{
     /*  this.clientes=this.clientes.filter(cliente=>cliente.id !== id); */
     window.location.reload();
    },error=>{
      console.log("error al eliminar el cliente", error);
      
    });
  };
}


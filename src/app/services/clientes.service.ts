import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  private API_CLIENTES='https://evaluacion-app-dae11-default-rtdb.firebaseio.com/';

  guardarCliente=(cliente:any):Observable<any>=>{
    return this.http.post(`${this.API_CLIENTES}/clientes.json`,cliente);
  }
  leerClientes=():Observable<any>=>{
    return this.http.get<any>(`${this.API_CLIENTES}/clientes.json`);
  }

}

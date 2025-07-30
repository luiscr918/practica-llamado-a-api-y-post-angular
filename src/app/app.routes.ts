import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';
import { EmpleadosComponent } from './components/empleadosComponents/empleados/empleados.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'clientes', component: ClientesPageComponent },
  { path: 'empleados', component: EmpleadosComponent },
];

import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClientesPageComponent } from './pages/clientes-page/clientes-page.component';
import { EmpleadosComponent } from './components/empleadosComponents/empleados/empleados.component';
import { ActualizarClienteComponent } from './components/clientesComponents/actualizar-cliente/actualizar-cliente.component';
import { autenticsGuard } from './guards/autentics.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistroUsuarioComponent } from './pages/registro-usuario/registro-usuario.component';
import { registroUsuarioGuard } from './guards/registro-usuario.guard';
import { loginCanMatchGuard } from './guards/login-can-match.guard';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'clientes', component: ClientesPageComponent },
  { path: 'empleados', component: EmpleadosComponent, canActivate:[autenticsGuard] },
  {path:'login', component:LoginPageComponent, canMatch:[loginCanMatchGuard]},
  {path:'registro-usuario', component:RegistroUsuarioComponent, canDeactivate:[registroUsuarioGuard]},
  {path:'clientes/:id',component:ActualizarClienteComponent}
];

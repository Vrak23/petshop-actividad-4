import { Routes } from '@angular/router';
import { Inicio } from './components/inicio/inicio';
import { Nosotros } from './components/nosotros/nosotros';
import { MascotasComponent } from './components/mascotas/mascotas';
import { ClientesComponent } from './components/clientes/clientes';
import { AdopcionesComponent } from './components/adopciones/adopciones';
import { Dashboard } from './components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Inicio },
  { path: 'nosotros', component: Nosotros },
  { path: 'mascotas', component: MascotasComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'adopciones', component: AdopcionesComponent },
  { path: 'dashboard', component: Dashboard },
  { path: '**', redirectTo: 'inicio' }
];

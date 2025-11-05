import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Clientes } from './pages/clientes/clientes';
import { Citas } from './pages/citas/citas';
import { Historial } from './pages/historial/historial';
import { Layout } from './layout/layout/layout';
import { DetalleMascotas } from './pages/detalle-mascotas/detalle-mascotas';
import { Home } from './pages/home/home';

export const routes: Routes = [

  { path: 'login', component: Login, pathMatch: 'full' },
  {path:'', component:Home},
  {
    path: '',
    component: Layout,
    children: [
      { path: 'clientes', component: Clientes },
      { path: 'citas', component: Citas },
      { path: 'historial', component: Historial },
      {path :'cliente/:id/mascotas',component:DetalleMascotas},
    ],
  },

  { path: '**', redirectTo: '' },
];

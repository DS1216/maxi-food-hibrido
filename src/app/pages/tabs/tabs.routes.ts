import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('../home-maxi/home-maxi.page').then(m => m.HomeMaxiPage),
      },
      {
        path: 'productos',
        loadComponent: () =>
          import('../productos/productos.page').then(m => m.ProductosPage),
      },
      {
        path: 'carrito',
        loadComponent: () =>
          import('../carrito/carrito.page').then(m => m.CarritoPage),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('../perfil/perfil.page').then(m => m.PerfilPage),
      },
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    ],
  },
];
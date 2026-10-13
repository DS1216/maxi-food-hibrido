import { Routes } from '@angular/router';

export const routes: Routes = [
<<<<<<< HEAD
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./paginas/login/login.page').then( m => m.LoginPage)
  },
];
=======
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage),
  },
  {
    path: 'tabs',
    loadChildren: () =>
      import('./pages/tabs/tabs.routes').then(m => m.routes),
  },
  { path: '**', redirectTo: 'tabs' },
];
>>>>>>> d3ec8b8cde8e6930064e221f1492a324b574fe3f

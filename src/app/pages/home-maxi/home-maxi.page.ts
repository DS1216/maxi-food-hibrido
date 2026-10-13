import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonFooter,
  IonTabBar,

} from '@ionic/angular'; // Ionic 9. Si tu versión es 7.5–8 usa '@ionic/angular/standalone'
import { CarritoService } from '../../services/carrito.service';
import { addIcons } from 'ionicons';
import {
  notificationsOutline,
  searchOutline,
  paw,
  nutrition,
  bagHandle,
  add,
  home,
  gridOutline,
  cartOutline,
  personOutline,
} from 'ionicons/icons';

interface Categoria {
  nombre: string;
  icono: string;
  color: string;
}

interface Producto {
  nombre: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home-maxi.page.html',
  styleUrls: ['./home-maxi.page.scss'],
  imports: [
    CurrencyPipe,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon,
   
  ],
})
export class HomeMaxiPage {
  nombreUsuario = 'Daniela';
  itemsCarrito = 2;

  categorias: Categoria[] = [
    { nombre: 'Concentrado', icono: 'paw', color: 'naranja' },
    { nombre: 'BARF', icono: 'nutrition', color: 'rojo' },
    { nombre: 'Accesorios', icono: 'bag-handle', color: 'verde' },
  ];

  productos: Producto[] = [
    {
      nombre: 'Royal Canin Medium Adulto',
      precio: 89900,
      imagen: 'assets/royal-canin.png',
    },
    {
      nombre: 'Agility Gold Cachorros',
      precio: 76800,
      imagen: 'assets/agility-gold.jpg',
    },
  ];

  constructor() {
    addIcons({
      notificationsOutline,
      searchOutline,
      paw,
      nutrition,
      bagHandle,
      add,
      home,
      gridOutline,
      cartOutline,
      personOutline,
    });
  }

  agregarAlCarrito(_producto: Producto) {
    this.itemsCarrito++;
  }
}

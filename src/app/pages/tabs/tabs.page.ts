import { Component, inject } from '@angular/core';
import {
  IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, gridOutline, cartOutline, personOutline } from 'ionicons/icons';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-tabs',
  standalone: true,
  templateUrl: './tabs.page.html',
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonBadge],
})
export class TabsPage {
  carrito = inject(CarritoService);

  constructor() {
    addIcons({ home, gridOutline, cartOutline, personOutline });
  }
}
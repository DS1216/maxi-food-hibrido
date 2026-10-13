import { Injectable, computed, signal } from '@angular/core';

export interface ItemCarrito {
  nombre: string;
  precio: number;
  cantidad: number;
}

@Injectable({ providedIn: 'root' })
export class CarritoService {
  private items = signal<ItemCarrito[]>([]);

  readonly lista = this.items.asReadonly();
  readonly totalItems = computed(() =>
    this.items().reduce((acc, i) => acc + i.cantidad, 0)
  );

  agregar(producto: { nombre: string; precio: number }) {
    this.items.update(lista => {
      const existente = lista.find(i => i.nombre === producto.nombre);
      return existente
        ? lista.map(i => (i === existente ? { ...i, cantidad: i.cantidad + 1 } : i))
        : [...lista, { ...producto, cantidad: 1 }];
    });
  }
}
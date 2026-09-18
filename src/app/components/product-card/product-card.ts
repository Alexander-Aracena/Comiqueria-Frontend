import { DecimalPipe } from '@angular/common';
import { Component, input, Input, computed } from '@angular/core';

@Component({
  imports: [DecimalPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  categoria = input<string>("");
  imagenURL = input<string>("");
  titulo = input<string>("");
  precio = input<number>(0);
  descuento = input<number | null>(null);
  posicion = input<number | undefined>(undefined);

  precioConDescuento = computed(() => {
    if (this.descuento() !== null) {
      return this.precio() - (this.precio() * this.descuento()! / 100);
    }
    return this.precio();
  });
}

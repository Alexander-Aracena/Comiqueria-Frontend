import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [DecimalPipe],
  selector: 'app-product-card',
  styleUrl: './product-card.css',
  templateUrl: './product-card.html',
})
export class ProductCard {
  @Input() categoria: string = "";
  @Input() imagenURL: string = "";
  @Input() titulo: string = "";
  @Input() precio: number = 0;
  @Input() descuento: number | null = null;
  @Input() posicion?: number;

  get precioConDescuento(): number {
    if (this.descuento !== null) {
      return this.precio - (this.precio * this.descuento / 100);
    }
    return this.precio;
  }
}

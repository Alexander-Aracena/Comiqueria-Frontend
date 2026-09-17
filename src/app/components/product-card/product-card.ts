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
}

import { Component, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Producto } from '../../models/producto.interface';

@Component({
  imports: [ProductCard],
  selector: 'app-product-section',
  styleUrl: './product-section.css',
  templateUrl: './product-section.html',
})
export class ProductSection {
  @Input() antetitulo: string = "";
  @Input() titulo: string = "";
  @Input() productos: Producto[] = [];
}

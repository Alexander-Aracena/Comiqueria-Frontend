import { Component, computed, input, Input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Producto } from '../../models/producto.interface';

@Component({
  imports: [ProductCard],
  selector: 'app-product-section',
  styleUrl: './product-section.css',
  templateUrl: './product-section.html',
})
export class ProductSection {
  antetitulo = input<string>("");
  titulo = input<string>("");
  productos = input<Producto[]>([]);
  variante = input<'clara' | 'oscura'>('clara');
}

import { Component } from '@angular/core';
import { ProductSection } from '../product-section/product-section';
import { ProductCard } from '../product-card/product-card';
import { Producto } from '../../models/producto.interface';

@Component({
  imports: [ProductSection, ProductCard],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  productos: Producto[] = [];
}

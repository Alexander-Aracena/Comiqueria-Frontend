import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ProductSection } from '../product-section/product-section';
import { Producto } from '../../models/producto.interface';
import { ProductService } from '../../services/product-service';
import { CategorySection } from '../category-section/category-section';
import { Categoria } from '../../models/categoria.interface';
import { CategoryService } from '../../services/category-service';
import { Hero } from '../hero/hero';

@Component({
  imports: [ProductSection, CategorySection, Hero],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  private logProductos = effect(() => {
    console.log('Productos actualizados:', this.productos());
    console.log('Productos más vendidos:', this.productosMasVendidos());
  });
  categorias = signal<Categoria[]>([]);
  productos = signal<Producto[]>([]);
  topProductos = signal<number>(4);
  productosNovedades = computed(() => this.productos().filter((producto) => producto.esNovedad));
  productosOfertas = computed(() => this.productos().filter((producto) => producto.descuento !== null));
  productosMasVendidos = computed(() =>
    this.productos()
      .filter((producto) => producto.ranking !== undefined)
      .sort((a, b) => a.ranking! - b.ranking!)
      .slice(0, this.topProductos())
  );

  ngOnInit(): void {
    this.productService.getProductos({esVisibleEnHome: true, productosMasVendidos: true}).subscribe((data) => {
      this.productos.set(data);
    });

    this.categoryService.getCategorias().subscribe((data) => {
      this.categorias.set(data);
    });
  }
}

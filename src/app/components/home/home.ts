import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ProductSection } from '../product-section/product-section';
import { Producto } from '../../models/producto.interface';
import { ProductService } from '../../services/product-service';
import { CategorySection } from '../category-section/category-section';
import { Categoria } from '../../models/categoria.interface';
import { CategoryService } from '../../services/category-service';

@Component({
  imports: [ProductSection, CategorySection],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  categorias = signal<Categoria[]>([]);
  productos = signal<Producto[]>([]);
  productosNovedades = computed(() =>
    this.productos()
      .filter((producto) => producto.esNovedad)
  );
  productosOfertas = computed(() =>
    this.productos()
      .filter((producto) => producto.descuento !== null)
  );
  productosMasVendidos = computed(() =>
    this.productos()
      .filter((producto) => producto.posicion !== undefined)
      .sort((a, b) => a.posicion! - b.posicion!),
  );

  ngOnInit(): void {
    this.productService.getProductos().subscribe((data) => {
      this.productos.set(data);
    });

    this.categoryService.getCategorias().subscribe((data) => {
      this.categorias.set(data);
    });
  }
}

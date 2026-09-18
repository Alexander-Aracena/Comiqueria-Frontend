import { Component, input } from '@angular/core';
import { CategoryCard } from '../category-card/category-card';
import { Categoria } from '../../models/categoria.interface';

@Component({
  imports: [CategoryCard],
  selector: 'app-category-section',
  styleUrl: './category-section.css',
  templateUrl: './category-section.html',
})
export class CategorySection {
  antetitulo = input<string>("");
  titulo = input<string>("");
  categorias = input<Categoria[]>([]);
}

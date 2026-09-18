import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-category-card',
  styleUrl: './category-card.css',
  templateUrl: './category-card.html',
})
export class CategoryCard {
  nombre = input<string>("");
  descripcion = input<string>("");
  imagenURL = input<string>("");
}

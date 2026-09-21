import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.interface';
import { HttpClient } from '@angular/common/http';

@Service()
export class CategoryService {
  private http = inject(HttpClient);

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('/data/categories.json');
  }
}

import { Service, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CategoriaFiltros } from '../models/categoria-filtros.model';
import { environment } from '../../environments/environment';

@Service()
export class CategoryService {
  private http = inject(HttpClient);

  getCategorias(filtros?: CategoriaFiltros): Observable<Categoria[]> {
    let params = new HttpParams();
    if (filtros) {
      Object.keys(filtros).forEach((key) => {
        const valor = filtros[key as keyof CategoriaFiltros];
        if (valor !== undefined && valor !== null) {
          if (Array.isArray(valor)) {
            valor.forEach((id) => {
              params = params.append(key, id.toString());
            });
          } else {
            params = params.set(key, valor.toString());
          }
        }
      });
    }
    return this.http.get<Categoria[]>('/data/categories.json');
    //return this.http.get<Categoria[]>(environment.baseUrl + 'categorias', { params });
  }
}

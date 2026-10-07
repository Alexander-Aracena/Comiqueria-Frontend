import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.interface';
import { environment } from '../../environments/environment';
import { ProductoFiltros } from '../models/producto-filtros.model';

@Service()
export class ProductService {
  private http = inject(HttpClient);

  getProductos(filtros?: ProductoFiltros): Observable<Producto[]> {
    let params = new HttpParams();
    if (filtros) {
      Object.keys(filtros).forEach((key) => {
        const valor = filtros[key as keyof ProductoFiltros];
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

    return this.http.get<Producto[]>('/data/products.json');
    //return this.http.get<Producto[]>(environment.baseUrl + 'productos', {params});
  }
}

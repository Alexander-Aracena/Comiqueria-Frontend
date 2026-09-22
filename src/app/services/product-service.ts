import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.interface';
import { environment } from '../../environments/environment';

@Service()
export class ProductService {
  private http = inject(HttpClient);

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(environment.baseUrl + 'productos');
  }
}

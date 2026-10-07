export interface ProductoFiltros {
  idsProductos?: number[];
  titulo?: string;
  minPrecio?: number;
  maxPrecio?: number;
  descripcion?: string;
  idAutor?: number;
  idSubcategoria?: number;
  idEditorial?: number;
  esNovedad?: boolean;
  esOferta?: boolean;
  esVisibleEnHome?: boolean;
  productosMasVendidos?: boolean;
}

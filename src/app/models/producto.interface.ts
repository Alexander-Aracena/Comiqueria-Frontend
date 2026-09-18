export interface Producto {
  id: number,
  titulo: string,
  precio: number,
  imagenURL: string,
  categoria: string,
  esNovedad: boolean,
  descuento: number | null,
  posicion?: number
}

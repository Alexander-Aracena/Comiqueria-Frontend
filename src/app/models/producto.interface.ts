export interface Producto {
  id: number,
  titulo: string,
  precio: number,
  imagenURL: string,
  categoria: string,
  descuento: number | null,
  posicion?: number
}

interface AutorDTO {
  id: number,
  nombre: string,
  apellido: string
}

interface CategoriaDTO {
  id: number,
  nombre: string
}

interface SubcategoriaDTO {
  id: number,
  nombre: string,
  categoria: CategoriaDTO
}

interface EditorialDTO {
  id: number,
  nombre: string
}

export interface Producto {
  id: number,
  titulo: string,
  precio: number,
  descripcion: string,
  tapa: string,
  isbn: string,
  peso: number,
  dimensiones: string,
  paginas: number,
  autores: AutorDTO[],
  subcategoria: SubcategoriaDTO,
  editorial: EditorialDTO,
  esNovedad: boolean,
  esVisibleEnHome: boolean,
  descuento: number | null,
  posicion?: number,
  estaVigente: boolean,
  fechaAlta: Date
}

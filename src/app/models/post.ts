export class Post {
  titulo: string;
  texto: string;
  autor: string;
  imagen: string;
  categoria: string;
  fecha: Date;

  constructor(
    pTitulo: string,
    pTexto: string,
    pAutor: string,
    pImagen: string,
    pCagegoria: string
  ) {
    this.titulo = pTitulo;
    this.texto = pTexto;
    this.autor = pAutor;
    this.imagen = pImagen;
    this.categoria = pCagegoria;
    this.fecha = new Date();
  }
}

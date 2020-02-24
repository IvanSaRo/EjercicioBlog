import { Injectable } from "@angular/core";
import { Post } from "./models/post";

@Injectable({
  providedIn: "root"
})
export class PostsService {
  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      new Post(
        "Retirado el 3 de Wade en Miami",
        "El número 3 de Dwyane Wade ya cuelga en lo más alto del Amercan Airlines Arena. Anoche, los Heat homenajearon al escolta que les llevó a ganar tres anillos de campeones. Y Flash, emocionado, recordó las palabras Kobe Bryant: 'Lo más importante es tratar de inspirar a otros'.",
        "Iván Sánchez",
        "https://www.nbamaniacs.com/wp-content/uploads/2020/02/GettyImages-1208057798.jpg",

        "Noticias"
      ),
      new Post(
        "Rumores de traspaso por Joel Embiid",
        "En las útltimas horas han surgido informaciones desde la prensa de Philadelphia poniendo en duda la continuidad del camerunés en la ciudad del amor fraternal, según aseguran dichos rumores Celtics y Knicks serían los principales candidatos a recibir al pivot ",
        "Pedro Llanez",
        "https://usatftw.files.wordpress.com/2019/01/usp-nba_-minnesota-timberwolves-at-philadelphia-76-e1554997040658.jpg?w=1000&h=600&crop=1",

        "Rumores"
      ),
      new Post(
        "Camisetas complicadas Vol. 1",
        "Pese a que en Estados Unidos en general, y Texas en particular, son lugares donde se acostumbra a rendir tributo a los miembros del ejército uno imaginaría que generalmente todo homenaje lleva consigo una imagen de solemnidad, no fue así cuando los Spurs de San Antonio decidieron adoprtar su camiseta con patrón de camuflaje, es la guerra, la guerra contra el sentido estético",
        "Luis Casado",
        "https://www.basket4us.com/blog/wp-content/uploads/2013/10/spurs-military-inspired-uniforms.jpg",

        "Camisetas"
      )
    ];
  }

  agregarPost(newPost: Post) {
    this.arrPosts.unshift(newPost);
  }

  //con promesas
  getAllPromise(): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts);
      console.log(this.arrPosts.length);
    });
    return prom;
  }

  getByCathegory(pCat: string): Promise<Post[]> {
    const prom = new Promise<Post[]>((resolve, reject) => {
      const arrFiltrado = this.arrPosts.filter(item => {
        // Filtro en minusculas, sin espacio
        const categoriaCompleta = this.eliminarDiacriticos(
          this.eliminarEspacios(item.categoria)
        );
        const pCategoriaNew = this.eliminarDiacriticos(
          this.eliminarEspacios(pCat)
        );
        return categoriaCompleta
          .toLowerCase()
          .includes(pCategoriaNew.toLowerCase());
      });
      resolve(arrFiltrado);
    });
    return prom;
  }
  eliminarEspacios(pCadena: string): string {
    const regex = / /gi; // reemplazar espacios con una expresión regular
    // "g" es global e "i" es insensitive (que le dan igual mayusculas o minusculas)
    return pCadena.replace(regex, "");
  }
  eliminarDiacriticos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}

/* Función sencilla para filtrado
getPostsByCategoria(categoria){
  let prom = new Promise<Post[]>((resolve,reject)=>{
    const arrFiltrado = this.arrPost.filter((item)=> {
      item.categoria === categoria
    })
  resolve (arrFiltrado);
  })
  return prom;
} */

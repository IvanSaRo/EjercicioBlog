import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostsService } from "../posts.service";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
  providers: []
})
export class BlogComponent implements OnInit {
  arrTodosLosPost: Post[];

  constructor(private postsService: PostsService) {
    this.arrTodosLosPost = [];
  }

  async ngOnInit() {
    this.arrTodosLosPost = await this.postsService.getAllPromise();
  }

  manejarCategoria($event) {
    this.arrTodosLosPost = [];
    if ($event.target.value == "Todos") {
      this.ngOnInit();
    } else {
      this.postsService.getByCathegory($event.target.value).then(arrPosts => {
        this.arrTodosLosPost = arrPosts;
        console.log($event.target.value);
      });
    }
  }

  /* filtrar categoría con async
  async manejarCategoria($event){
    this.arrTodosLosPost = await this.postsService.getByCathegory($event.target.value);
  } */

  manejarCampoTexto($event) {
    this.arrTodosLosPost = [];
    this.postsService
      .getByCathegory($event.target.value)
      // tslint:disable-next-line: no-shadowed-variable
      .then(arrPosts => {
        this.arrTodosLosPost = arrPosts;
        //console.log(arrTodosLosPost);
      });
  }
}

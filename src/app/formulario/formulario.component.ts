import { Component, OnInit } from "@angular/core";
import { Post } from "../models/post";
import { PostsService } from "../posts.service";

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"],
  providers: []
})
export class FormularioComponent implements OnInit {
  form: FormGroup;
  constructor(private postsService: PostsService) {
    this.form = new FormGroup({
      titulo: new FormControl("", [
        Validators.required,
        Validators.maxLength(50)
      ]),
      texto: new FormControl("", [Validators.required]),
      autor: new FormControl("", [
        Validators.required,
        Validators.maxLength(300)
      ]),
      imagen: new FormControl("", [
        Validators.required,
        Validators.pattern(
          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        )
      ]),

      categoria: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {}

  async onSubmit(p) {
    const post: Post = new Post(
      this.form.value.titulo,
      this.form.value.texto,
      this.form.value.autor,
      this.form.value.imagen,

      this.form.value.categoria
    );
    this.postsService.agregarPost(post);
    this.form.reset();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts = [
    { title: 'Primeiro Post', content: 'Conteudo Teste' },
    { title: 'Primeiro Post', content: 'Conteudo Teste' },
    { title: 'Primeiro Post', content: 'Conteudo Teste' }
  ]

  constructor() { }

  ngOnInit() {
  }

}

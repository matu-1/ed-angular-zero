import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public titulo: string = "Cursos";
  public cursos: Curso[] = [
    {
      id: 1,
      name: "Angular",
      description: "Angular desde cero",
      startDate: "15 septiembre, 2021",
      price: 15.5,
      rating: 8.2,
      image: "https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png",
    },
     {
      id: 1,
      name: "Angular",
      description: "Angular desde cero",
      startDate: "15 septiembre, 2021",
      price: 15.5,
      rating: 8.2,
      image: "https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png",
    },
  ];

  constructor() { 
    setTimeout(() => {
      this.removeAll();
    }, 6000);
  }

  ngOnInit(): void {
  }

  update(curso: Curso): void {
    console.log("Update", curso);
  }

  remove(curso: Curso): void {
    console.log("Delete", curso);
  }

  removeAll(){
    this.cursos = [];
  }

}

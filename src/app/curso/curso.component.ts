import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit, AfterViewInit {
  @ViewChild('filtro', { static: false })
  public filtro!: ElementRef;
  public titulo: string = 'Cursos';
  public cursos: Curso[] = [
    {
      id: 1,
      name: 'Angular',
      description: 'Angular desde cero',
      startDate: '15 septiembre, 2021',
      price: 15.5,
      rating: 8.2,
      image: 'https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png',
    },
    {
      id: 2,
      name: 'PHP',
      description: 'PHP desde cero',
      startDate: '15 septiembre, 2021',
      price: 15.5,
      rating: 8.2,
      image: 'https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png',
    },
    {
      id: 3,
      name: 'Java',
      description: 'Java desde cero',
      startDate: '15 septiembre, 2021',
      price: 15.5,
      rating: 8.2,
      image: 'https://cdn.iconscout.com/icon/free/png-256/php-27-226042.png',
    },
  ];

  constructor(private router: Router) {
    setTimeout(() => {
      // this.removeAll();
    }, 6000);
  }
  ngAfterViewInit(): void {
    this.filtro.nativeElement.value = "Angular desde cero";
  }

  ngOnInit(): void {}

  removeAll() {
    this.cursos = [];
  }

  onDelete(e: Curso) {
    console.log('onDelete', e);
    this.cursos = this.cursos.filter( curso => curso != e);
  }

  onEdit(e: Curso) {
    console.log('onEdit', e);
    this.router.navigate([`curso/edit/${e.id}`])
  }
}

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
})
export class CursoComponent implements OnInit, AfterViewInit {
  @ViewChild('filtro', { static: false })
  public filtro!: ElementRef;
  public titulo: string = 'Cursos';
  public cursos!: Curso[];
  public _textFilter: string = 'Angular';

  constructor(private router: Router, private cursoServie: CursoService) {
    setTimeout(() => {
      // this.removeAll();
    }, 6000);
  }

  get textFilter() {
    return this._textFilter;
  }

  set textFilter(value: string) {
    this._textFilter = value;
    this.cursos = this.loadFilter(value, this.cursoServie.getAll());
  }

  ngAfterViewInit(): void {
    this.filtro.nativeElement.value = 'Angular desde cero';
  }

  ngOnInit(): void {
    this.cursos = this.loadFilter(this._textFilter, this.cursoServie.getAll());
  }

  removeAll() {
    this.cursos = [];
  }

  onDelete(e: Curso) {
    console.log('onDelete', e);
    this.cursos = this.cursos.filter((curso) => curso != e);
  }

  onEdit(e: Curso) {
    console.log('onEdit', e);
    this.router.navigate([`curso/edit/${e.id}`]);
  }

  loadFilter(value: string, cursos: Curso[]): Curso[] {
    return cursos.filter((item) =>
      item.name?.toUpperCase().includes(value.toUpperCase())
    );
  }
}

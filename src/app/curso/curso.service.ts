import { Injectable } from '@angular/core';
import { Curso } from './curso';
import cursosJson from './cursos.json';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor() {}

  getAll(): Curso[] {
    return cursosJson;
  }
}

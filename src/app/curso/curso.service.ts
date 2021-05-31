import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Curso } from './curso';
// import cursosJson from './cursos.json';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Curso[]> {
    return this.http.get<Curso[]>('assets/jsons/cursos.json')
      .pipe(
        catchError(this.handlerError)
      );
  }

  handlerError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log('Error', error.message, error.error);
    }{
      console.log("Error server", error.status, error.error)
    }
    return throwError(error);
  }
}

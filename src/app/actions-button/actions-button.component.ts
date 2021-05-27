import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Curso } from '../curso/curso';

@Component({
  selector: 'app-actions-button',
  templateUrl: './actions-button.component.html',
  styleUrls: ['./actions-button.component.css']
})
export class ActionsButtonComponent implements OnInit {
  @Input()
  public curso!: Curso

  @Output()
  public edit: EventEmitter<Curso> = new EventEmitter();

  @Output()
  public delete: EventEmitter<Curso> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  update(curso: Curso): void {
    console.log("Update", curso);
    this.edit.emit(curso);
  }

  remove(curso: Curso): void {
    console.log("Delete", curso);
    this.delete.emit(curso);
  }

}

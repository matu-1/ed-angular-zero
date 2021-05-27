import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { EditComponent } from './curso/edit/edit.component';

const routes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'curso/edit/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

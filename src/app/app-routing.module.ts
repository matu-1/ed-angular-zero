import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './curso/create/create.component';
import { CursoComponent } from './curso/curso.component';
import { EditComponent } from './curso/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'curso', pathMatch: 'full' },
  { path: 'curso', component: CursoComponent },
  { path: 'curso/edit/:id', component: EditComponent },
  { path: 'curso/create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

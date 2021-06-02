import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReactiveComponent } from './curso/create-reactive/create-reactive.component';
import { CreateComponent } from './curso/create/create.component';
import { CursoComponent } from './curso/curso.component';
import { EditComponent } from './curso/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'curso', pathMatch: 'full' },
  { path: 'curso', component: CursoComponent },
  { path: 'curso/edit/:id', component: EditComponent },
  { path: 'curso/create', component: CreateComponent },
  { path: 'curso/create-reactive', component: CreateReactiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

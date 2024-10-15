import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtorFormComponent } from './ator-form/ator-form.component';
import { AtorComponent } from './ator/ator.component';
import { AtorResolver } from './guards/ator.resolver';

const routes: Routes = [
  {path: '', component: AtorComponent},
  {path: 'new', component: AtorFormComponent, resolve: {ator: AtorResolver}},
  {path: 'edit/:id', component: AtorFormComponent, resolve: {ator: AtorResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtorRoutingModule { }
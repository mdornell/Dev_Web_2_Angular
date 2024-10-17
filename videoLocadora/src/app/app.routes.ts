import { Routes } from '@angular/router';
import { AtorFormComponent } from './controle-acervo/ator/ator-form/ator-form.component';
import { AtorComponent } from './controle-acervo/ator/ator.component';
import { ClasseComponent } from './controle-acervo/classe/classe.component';
import { DiretorFormComponent } from './controle-acervo/diretor/diretor-form/diretor-form.component';
import { DiretorComponent } from './controle-acervo/diretor/diretor.component';
import { AtorResolver } from './guards/ator/ator.resolver';
import { DiretorResolver } from './guards/diretor/diretor.resolver';

export const routes: Routes = [

    { path: '', redirectTo: 'ator', pathMatch: 'full' },

    // Paths Ator
    { path: 'ator', component: AtorComponent },
    { path: 'ator/new', component: AtorFormComponent, resolve: { ator: AtorResolver } },
    { path: 'ator/edit/:id', component: AtorFormComponent, resolve: { ator: AtorResolver } },

    // Paths Diretor
    { path: 'diretor', component: DiretorComponent },
    { path: 'diretor/new', component: DiretorFormComponent, resolve: { ator: DiretorResolver } },
    { path: 'diretor/edit/:id', component: DiretorFormComponent, resolve: { ator: DiretorResolver } },

    // Paths Classe
    { path: 'classe', component: ClasseComponent },

];

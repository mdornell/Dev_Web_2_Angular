import { Routes } from '@angular/router';
import { AtorComponent } from './controle-acervo/ator/ator.component';
import { ClasseComponent } from './controle-acervo/classe/classe.component';
import { DiretorComponent } from './controle-acervo/diretor/diretor.component';

export const routes: Routes = [

    { path: '', redirectTo: 'ator', pathMatch: 'full' },
    { path: 'ator', component: AtorComponent },
    { path: 'diretor', component: DiretorComponent },
    { path: 'classe', component: ClasseComponent },
    
];

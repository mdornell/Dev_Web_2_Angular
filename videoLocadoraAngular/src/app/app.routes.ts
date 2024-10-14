import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'ator', pathMatch: 'full' },
    {
        path: 'ator',
        loadChildren: () => import('./ator/ator.module').then(m => m.AtorModule)
    },
    {
        path: 'diretor',
        loadChildren: () => import('./diretor/diretor.module').then(m => m.DiretorModule)
    },
    {
        path: 'classe',
        loadChildren: () => import('./classe/classe.module').then(m => m.ClasseModule)
    }
];

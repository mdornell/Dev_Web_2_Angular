import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', redirectTo: 'ator', pathMatch: 'full'},
    {
        path: 'ator',
        loadChildren: () => import('./ator/ator.module').then(m => m.AtorModule)
    }
];

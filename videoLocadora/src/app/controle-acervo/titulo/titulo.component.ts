import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TituloService } from '../../service/titulo/titulo.service';
import { Titulo } from '../../type/titulo';
import { TituloListComponent } from './titulo-list/titulo-list.component';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [
    TituloListComponent,
    CommonModule
  ],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.scss'
})
export class TituloComponent {

    titulos$ : Observable<Titulo[]>;
    tituloSelected: Titulo | null = null;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tituloService: TituloService
    ) {
        this.titulos$ = this.tituloService.list();
    }

    ngOnInit() {
    }

    onSelected(titulo: Titulo) {
        this.tituloSelected = titulo;
    }

    onDelete() {
        if (this.tituloSelected?._id) {
            this.tituloService.remove(this.tituloSelected).
                subscribe(() => {
                    this.titulos$ = this.tituloService.list();
                });
        }
        this.tituloSelected = null;
    }
}

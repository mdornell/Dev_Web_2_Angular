import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Ator } from '../model/ator';
import { AtorService } from '../services/ator.service';


@Component({
    selector: 'app-ator',
    standalone: true,
    imports: [
        MatTableModule,
        MatButtonModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatIconModule,
        NgIf,
        NgFor,
        AsyncPipe
    ],
    templateUrl: './ator.component.html',
    styleUrl: './ator.component.scss'
})
export class AtorComponent {

    atores$: Observable<Ator[]>;
    displayedColumns = ['_id', 'nome', 'acoes'];
    atorIdParaDeletar: number | null  = null;

    constructor(
        private atorService: AtorService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.atores$ = this.atorService.list().pipe(
            catchError(error => {
                console.log('Erro ao carregar a lista de atores');
                return of([]);
            })
        );
    }

    ngOnInit(): void { }

    onAdd(): void {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(ator: Ator) {
        this.router.navigate(['edit', ator._id], { relativeTo: this.route });
    }

    // Abrir o modal e definir o ID do ator a ser deletado
    onOpenModal(ator: Ator): void {
        this.atorIdParaDeletar = ator._id;
        const modal = document.getElementById('deleteModal');
        if (modal) {
            modal.classList.add('show');
            modal.style.display = 'block';
        }
    }

    onCloseModal(){
        const modal = document.getElementById('deleteModal');
        if (modal) {
            modal.classList.remove('show');
            modal.style.display = 'none';
        }
    }

    // Confirmar e deletar o ator
    onDelete(): void {
        if (this.atorIdParaDeletar) {
            this.atorService.remove(this.atorIdParaDeletar).subscribe(() => {
                this.atores$ = this.atorService.list();
            });
            this.atorIdParaDeletar = null; // Resetar o ID após a exclusão
        }
        this.onCloseModal();
    }

    

}

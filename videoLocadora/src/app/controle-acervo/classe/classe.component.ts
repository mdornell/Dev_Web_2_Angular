import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClasseService } from '../../service/classe/classe.service';
import { Classe } from '../../type/classe';
import { ClasseListComponent } from "./classe-list/classe-list.component";

@Component({
    selector: 'app-classe',
    standalone: true,
    imports: [
    NgFor,
    NgIf,
    CommonModule,
    ClasseListComponent
],
    templateUrl: './classe.component.html',
    styleUrl: './classe.component.scss'
})
export class ClasseComponent {

    classes$: Observable<Classe[]>; // Observable para carregar as classes
    classeSelected: Classe | null = null;
   

    constructor(
        private classeService: ClasseService,
        private router: Router,
        private route: ActivatedRoute
    ) { 
        this.classes$ = this.classeService.list();
    }

    ngOnInit(): void {
        this.refresh()
    }

    onClasseSelected(classe: Classe) {
        this.classeSelected = classe;
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route }); // Navega para o formulário de adição
    }

    onEdit(classe: Classe) {
        this.router.navigate(['edit', classe._id], { relativeTo: this.route }); // Navega para o formulário de edição
    }

    onDelete() {
        if (this.classeSelected?._id) {
            this.classeService.remove(this.classeSelected).
                subscribe(() => {
                    this.refresh()
                });
        }
        this.classeSelected = null;
    }

    refresh(){
        this.classes$ = this.classeService.list();
    }
}

import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../../../type/classe';

@Component({
  selector: 'app-classe-list',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: './classe-list.component.html',
  styleUrl: './classe-list.component.scss'
})
export class ClasseListComponent {

    @Input() classes: Classe[] = []
    @Output() classeSelected: EventEmitter<Classe> = new EventEmitter<Classe>();

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(classe: Classe) {
        this.router.navigate(['edit', classe._id], { relativeTo: this.route });
    }

    onSelected(classe: Classe) {
        this.classeSelected.emit(classe);
    }
}

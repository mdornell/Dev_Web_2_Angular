import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ator } from '../../../type/ator';

@Component({
  selector: 'app-ator-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './ator-list.component.html',
  styleUrl: './ator-list.component.scss'
})
export class AtorListComponent {

    @Input() atores: Ator[] = []
    @Output() atorSelected: EventEmitter<Ator> = new EventEmitter<Ator>();

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(ator: Ator) {
        this.router.navigate(['edit', ator._id], { relativeTo: this.route });
    }

    onSelected(ator: Ator) {
        this.atorSelected.emit(ator);
    }
}

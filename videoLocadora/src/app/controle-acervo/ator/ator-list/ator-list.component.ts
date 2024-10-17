import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
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
}

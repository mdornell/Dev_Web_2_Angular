import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diretor } from '../../../type/diretor';

@Component({
  selector: 'app-diretor-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './diretor-list.component.html',
  styleUrl: './diretor-list.component.scss'
})
export class DiretorListComponent {
    
    @Input() diretores: Diretor[] = [];
    @Output()  selected: EventEmitter<Diretor> = new EventEmitter<Diretor>;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(diretor: Diretor) {
        this.router.navigate(['edit', diretor._id], { relativeTo: this.route });
    }

    onSelected(diretor: Diretor) {
        this.selected.emit(diretor);
    }
}

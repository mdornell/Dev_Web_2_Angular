import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Titulo } from '../../../type/titulo';

@Component({
  selector: 'app-titulo-list',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './titulo-list.component.html',
  styleUrl: './titulo-list.component.scss'
})
export class TituloListComponent {
    
    @Input() titulos: Titulo[] = []
    @Output() tituloSelected: EventEmitter<Titulo> = new EventEmitter<Titulo>();

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
    }

    onAdd() {
        this.router.navigate(['new'], { relativeTo: this.route });
    }

    onEdit(titulo: Titulo) {
        this.router.navigate(['edit', titulo._id], { relativeTo: this.route });
    }

    onSelected(titulo: Titulo) {
        this.tituloSelected.emit(titulo);
    }

}

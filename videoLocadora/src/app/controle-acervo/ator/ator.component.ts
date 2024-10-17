import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AtorService } from '../../service/ator/ator.service';
import { Ator } from '../../type/ator';
import { AtorListComponent } from './ator-list/ator-list.component';

@Component({
  selector: 'app-ator',
  standalone: true,
  imports: [
    AtorListComponent,
    CommonModule,
  ],
  templateUrl: './ator.component.html',
  styleUrl: './ator.component.scss'
})
export class AtorComponent {

    atores$: Observable<Ator[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private atorService: AtorService
    ) { 
        this.atores$ = this.atorService.list();
    }

    ngOnInit() {
    }
}

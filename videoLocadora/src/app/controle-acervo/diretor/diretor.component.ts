import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DiretorService } from '../../service/diretor/diretor.service';
import { Diretor } from '../../type/diretor';
import { DiretorListComponent } from './diretor-list/diretor-list.component';

@Component({
  selector: 'app-diretor',
  standalone: true,
  imports: [
    CommonModule,
    DiretorListComponent
  ],
  templateUrl: './diretor.component.html',
  styleUrl: './diretor.component.scss'
})
export class DiretorComponent {

    diretores$: Observable<Diretor[]>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private diretorService: DiretorService
    ) { 
        this.diretores$ = this.diretorService.list();
    }

    ngOnInit() {
    }
}

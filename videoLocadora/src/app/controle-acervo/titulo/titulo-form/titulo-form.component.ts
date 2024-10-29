import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AtorService } from '../../../service/ator/ator.service';
import { ClasseService } from '../../../service/classe/classe.service';
import { DiretorService } from '../../../service/diretor/diretor.service';
import { ItemService } from '../../../service/item/item.service';
import { Ator } from '../../../type/ator';
import { Classe } from '../../../type/classe';
import { Diretor } from '../../../type/diretor';
import { Item } from '../../../type/item';

@Component({
    selector: 'app-titulo-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgFor,
        CommonModule,
        RouterModule
    ],
    templateUrl: './titulo-form.component.html',
    styleUrl: './titulo-form.component.scss'
})
export class TituloFormComponent {

    form: FormGroup;
    atores$: Observable<Ator[]>;
    diretores$: Observable<Diretor[]>;
    classes$: Observable<Classe[]>;
    itens$: Observable<Item[]>;

    constructor(
        private fb: FormBuilder,
        private atorService: AtorService,
        private diretorService: DiretorService,
        private classeService: ClasseService,
        private itemService: ItemService,
    ) {
        this.form = this.fb.group({
            nome: [''],
            ano: [''],
            sinopse: [''],
            categoria: [''],
            ator: [''],
            diretor: [''],
            classe: [''],
            itens: ['']
        });
        this.atores$ = this.atorService.list();
        this.diretores$ = this.diretorService.list();
        this.classes$ = this.classeService.list();
        this.itens$ = this.itemService.list();
    }

    ngOnInit(): void {
        this.onRefresh();
    }

    onSubmit(): void {
        console.log(this.form.value);
    }

    onCancel(): void {
        this.form.reset();
    }

    onRefresh(): void {
        this.atores$ = this.atorService.list();
        this.diretores$ = this.diretorService.list();
        this.classes$ = this.classeService.list();
        this.itens$ = this.itemService.list();
    }
}


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AtorService } from '../../../service/serviceAtor/atorService';
import { MatTableModule } from '@angular/material/table';
import { Ator } from '../model/ator';

@Component({
    selector: 'app-ator',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatTableModule
    ],
    templateUrl: './ator.component.html',
    styleUrl: './ator.component.scss'
})
export class AtorComponent {

    form: FormGroup;
    atores: Ator[] = [
        { _id: 1, nome: 'Tom Cruise' },
        { _id: 2, nome: 'Brad Pitt' },
    ];
    displayedColumns = ['_id','nome'];

    constructor(private formBuilder: FormBuilder, private atorService: AtorService) {
        this.form = this.formBuilder.group({
            _id: [0],
            nome: [''],
        });
    }

    salvar() {
        this.atorService.salvar(this.form.value).subscribe(() => {
            console.log('Ator salvo com sucesso');
        });
        this.atores = []
    }

    ngOnInit(): void {

    }
}

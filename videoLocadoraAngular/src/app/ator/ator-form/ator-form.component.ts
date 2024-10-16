import { Location, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ActivatedRoute } from '@angular/router';
import { Ator } from '../model/ator';
import { AtorService } from '../services/ator.service';

@Component({
    selector: 'app-ator-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './ator-form.component.html',
    styleUrl: './ator-form.component.scss'
})
export class AtorFormComponent implements OnInit {

    form: FormGroup;  // Inicializando a propriedade aqui, sem atribuir ainda

    constructor(
        private formBuilder: NonNullableFormBuilder,
        private service: AtorService,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.form = this.formBuilder.group({
            _id: [0],
            nome: ['']
        });
    }

    ngOnInit(): void {
        const ator: Ator = this.route.snapshot.data['ator'];
        this.form.setValue({
            _id: ator._id,
            nome: ator.nome
        });

        // this.form = this.formBuilder.group({
        //     nome: ['', [Validators.required, Validators.minLength(3)]]
        //   });
    };

    onSubmit() {
        if (this.form.valid) {
            this.service.save(this.form.value)
            .subscribe(
                result => this.onSuccess(),
                error => this.onErro()
            );
        } else {
            this.snackBar.open('Formulario Invalido', 'X', { duration: 5000 });
        }
        
    }


    onCancel() {
        this.form.reset();
        this.location.back();
    }

    onSuccess() {
        this.snackBar.open('Registro salvo com sucesso', '', { duration: 5000 });
        this.location.back();
    }

    onErro() {
        this.snackBar.open('Erro ao salvar o registro', '', { duration: 5000 });
    }
}

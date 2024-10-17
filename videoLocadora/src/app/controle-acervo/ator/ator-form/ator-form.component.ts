import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AtorService } from '../../../service/ator/ator.service';
import { Ator } from '../../../type/ator';

@Component({
  selector: 'app-ator-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './ator-form.component.html',
  styleUrl: './ator-form.component.scss'
})
export class AtorFormComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private atorService: AtorService,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private location: Location
    ) { 
        this.form = this.fb.group({
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
    }


    onSubmit() {
        if (this.form.valid) {
            this.atorService.save(this.form.value)
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

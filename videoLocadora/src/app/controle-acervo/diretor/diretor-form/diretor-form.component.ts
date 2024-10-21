import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DiretorService } from '../../../service/diretor/diretor.service';
import { Diretor } from '../../../type/diretor';

@Component({
  selector: 'app-diretor-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './diretor-form.component.html',
  styleUrl: './diretor-form.component.scss'
})
export class DiretorFormComponent implements OnInit {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private diretorService: DiretorService,
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
        const diretor: Diretor = this.route.snapshot.data['diretor'];
        this.form.setValue({
            _id: diretor._id,
            nome: diretor.nome
        });
    }

    onSubmit() {
        if (this.form.valid) {
            this.diretorService.save(this.form.value)
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

import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasseService } from '../../../service/classe/classe.service';

@Component({
    selector: 'app-classe-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
    ],
    templateUrl: './classe-form.component.html',
    styleUrl: './classe-form.component.scss'
})
export class ClasseFormComponent {

    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private classeService: ClasseService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private snackBar: MatSnackBar,
    ) {
        this.form = this.fb.group({
            _id: [0],
            nome: [''],
            valor: [0,0],
            prazoDeDevolucao: ["dd-MM-yyyy"]
        });
     }

     ngOnInit(): void {
        const classe = this.route.snapshot.data['classe'];
        this.form.setValue({
            _id: classe._id,
            nome: classe.nome,
            valor: classe.valor,
            prazoDeDevolucao: classe.prazoDeDevolucao
        });
        
    }

    onSubmit() {
        if (this.form.valid) {
            this.classeService.save(this.form.value)
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

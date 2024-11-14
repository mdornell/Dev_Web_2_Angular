import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService } from '../../../service/item/item.service';
import { TituloService } from '../../../service/titulo/titulo.service';
import { Titulo } from '../../../type/titulo';

@Component({
    selector: 'app-item-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule
    ],
    templateUrl: './item-form.component.html',
    styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {

    form: FormGroup;
    titulos$: Observable<Titulo[]>;

    constructor(
        private fb: FormBuilder,
        private itemService: ItemService,
        private router: Router,
        private route: ActivatedRoute,
        private location: Location,
        private snackBar: MatSnackBar,
        private tituloService: TituloService
    ) {
        this.form = this.fb.group({
            _id: [0],
            numSerie: [0],
            dtAquisicao: [""],
            tipoItem: [''],
            titulos: ['']
        });
        this.titulos$ = this.tituloService.list();
    }

    ngOnInit(): void {
        const item = this.route.snapshot.data['item'];
        this.form.setValue({
            _id: item._id,
            numSerie: item.numSerie,
            dtAquisicao: item.dtAquisicao,
            tipoItem: item.tipoItem,
            titulos: '',
        });
        if (item._id) {
            this.selectTitulo(item.titulo);
        }
        this.titulos$ = this.tituloService.list();
    }

    selectTitulo(titulo: Titulo): void {
        this.form.patchValue({ titulos: titulo._id });
    }

    onSubmit() {
        if (this.form.valid && this.form.value.dtAquisicao != 'Invalid Date') {

            const selectedTitulo = this.form.value.titulos;
            this.titulos$.subscribe(titulos => {
                const payload = {
                    ...this.form.value,
                    titulo: titulos.find(titulo => titulo._id === selectedTitulo)
                };
                this.itemService.save(payload)
                    .subscribe(
                        result => this.onSuccess(),
                        error => this.onErro()
                    );
            });

        } else {
            this.snackBar.open('Formulario Invalido', 'X', { duration: 5000 });
        }
    }

    onSuccess() {
        this.snackBar.open('Item Salvo com Sucesso', 'X', { duration: 5000 });
        this.router.navigate(['/item']);
    }

    onErro() {
        this.snackBar.open('Erro ao Salvar Item', 'X', { duration: 5000 });
    }

    onCancel() {
        this.form.reset();
        this.location.back();
    }

}

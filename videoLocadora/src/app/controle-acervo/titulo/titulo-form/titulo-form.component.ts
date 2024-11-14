import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';
import { AtorService } from '../../../service/ator/ator.service';
import { ClasseService } from '../../../service/classe/classe.service';
import { DiretorService } from '../../../service/diretor/diretor.service';
import { TituloService } from '../../../service/titulo/titulo.service';
import { Ator } from '../../../type/ator';
import { Classe } from '../../../type/classe';
import { Diretor } from '../../../type/diretor';

@Component({
    selector: 'app-titulo-form',
    standalone: true,
    imports: [
        ReactiveFormsModule,
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

    constructor(
        private fb: FormBuilder,
        private tituloService: TituloService,
        private atorService: AtorService,
        private diretorService: DiretorService,
        private classeService: ClasseService,
        private route: ActivatedRoute,
        private router: Router,
        private snackBar: MatSnackBar,
        private location: Location
    ) {
        this.form = this.fb.group({
            _id: [0],
            nome: [''],
            ano: [0],
            sinopse: [''],
            categoria: [''],
            ator: [null],
            diretor: [null],
            classe: [null],
        });
        this.atores$ = this.atorService.list();
        this.diretores$ = this.diretorService.list();
        this.classes$ = this.classeService.list();
    }

    ngOnInit(): void {
        const titulo = this.route.snapshot.data['titulo'];
        this.form.setValue({
            _id: titulo._id,
            nome: titulo.nome,
            ano: titulo.ano | 2024,
            sinopse: titulo.sinopse,
            categoria: titulo.categoria,
            ator: '',
            diretor: '',
            classe: '',
        });
        if (titulo._id) {
            this.selectAtores(titulo.atores)
            this.selectDiretor(titulo.diretor)
            this.selectClasse(titulo.classe)
        }
    }

    onSubmit() {
        if (this.form.valid && this.getValidSelects()) {
            const formValue = this.form.value;

            // Aqui você vai buscar o objeto completo da classe, ator e diretor usando o id
            const selectedClasse = this.classes$.pipe(
                map(classes => classes.find(classe => classe._id === formValue.classe))
            );

            const selectedDiretor = this.diretorService.list().pipe(
                map(diretores => diretores.find(diretor => diretor._id === formValue.diretor))
            );

            const selectedAtores = this.atorService.list().pipe(
                map(atores => formValue.ator.map((id: number) => atores.find(ator => ator._id === id)))
            );

            // Combine as operações acima para obter todos os dados completos antes de enviar
            combineLatest([selectedClasse, selectedDiretor, selectedAtores]).subscribe(([classe, diretor, atores]) => {
                const payload = {
                    _id: formValue._id,
                    nome: formValue.nome,
                    ano: formValue.ano,
                    sinopse: formValue.sinopse,
                    categoria: formValue.categoria,
                    ator: atores, // Agora atores é um array de objetos Ator
                    diretor: diretor, // Objeto completo do diretor
                    classe: classe // Objeto completo da classe
                };


                this.tituloService.save(payload)
                    .subscribe(
                        result => this.onSuccess(),
                        error => this.onError()
                    );
            });
        } else {
            this.snackBar.open('Formulario Inválido', 'X', { duration: 5000 });
        }
    }

    getValidSelects(): boolean {
        const formValue = this.form.value;
        return formValue.ator && formValue.ator.length > 0 && formValue.diretor && formValue.classe;
    }

    onSuccess() {
        this.snackBar.open('Titulo Salvo com Sucesso', 'X', { duration: 5000 });
        this.router.navigate(['/titulo']);
    }

    onError() {
        this.snackBar.open('Erro ao Salvar Titulo', 'X', { duration: 5000 });
    }

    onCancel() {
        this.form.reset();
        this.location.back();
    }

    selectAtores(atores: Ator[]): void {
        const selectedAtores = atores.map(ator => ator._id);
        console.log(selectedAtores);
        this.form.patchValue({ ator: selectedAtores });
    }

    selectDiretor(diretor: Diretor): void {
        this.form.patchValue({ diretor: diretor._id });
    }

    selectClasse(classe: Classe): void {
        this.form.patchValue({ classe: classe._id });
    }



}


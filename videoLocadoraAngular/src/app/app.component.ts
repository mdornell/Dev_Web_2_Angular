import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AtorService } from '../service/serviceAtor/atorService';
import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,  
  ],
  providers: [AtorService],  // Providencie o serviço no próprio componente autônomo
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form: FormGroup;

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
  }
}

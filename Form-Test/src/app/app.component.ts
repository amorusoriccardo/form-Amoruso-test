import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Utente} from './utente';
import { Utenti } from './mock-utenti';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  myForm: FormGroup;
  utenti: Utente[] = Utenti;
  appuntamentoSelezionato: Utente;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'nome': ['Nome', Validators.required],
    });
  }

  ngOnInit() {
  }

  onSelect(appuntamento: Utente): void {
    this.appuntamentoSelezionato = appuntamento;
  }

  onSubmit(): void {

    let appuntamento: Utente = new Utente();
    appuntamento.nome = this.myForm.controls['nome'].value;


    this.utenti.push(appuntamento);
  }
}

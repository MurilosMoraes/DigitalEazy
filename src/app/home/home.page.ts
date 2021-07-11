import { Component } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

extrato = true
transacoes = false
cobranca = false
correspondente = false

  constructor() {}

  openExtrato(){
    this.extrato = true
    this.transacoes = false
    this.cobranca = false
    this.correspondente = false
  }

  openTransacoes(){
    this.extrato = false
    this.transacoes = true
    this.cobranca = false
    this.correspondente = false
  }

  openCobranca(){
    this.extrato = false
    this.transacoes = false
    this.cobranca = true
    this.correspondente = false
  }

  openCorrespondente(){
    this.extrato = false
    this.transacoes = false
    this.cobranca = false
    this.correspondente = true
  }

}

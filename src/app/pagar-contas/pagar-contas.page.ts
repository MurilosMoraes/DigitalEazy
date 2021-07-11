import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagar-contas',
  templateUrl: './pagar-contas.page.html',
  styleUrls: ['./pagar-contas.page.scss'],
})
export class PagarContasPage implements OnInit {

  codigo = true
  infos = false
  comprovante = false
  constructor() { }

  ngOnInit() {
  }

  openCodigo() {
    this.codigo = true;
    this.infos = false
    this.comprovante = false

  }


  openInfos() {
    this.codigo = false;
    this.infos = true
    this.comprovante = false

  }

  openComprovante() {
    this.codigo = false;
    this.infos = false
    this.comprovante = true

  }


}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ted',
  templateUrl: './ted.page.html',
  styleUrls: ['./ted.page.scss'],
})
export class TedPage implements OnInit {

  dados = true
  confirme = false
  comprovante = false

  constructor() { }

  ngOnInit() {
  }

  openDados() {
    this.dados = true
    this.confirme = false
    this.comprovante = false
  }

  openConfirme() {
    this.dados = false
    this.confirme = true
    this.comprovante = false
  }

  openComprovante() {
    this.dados = false
    this.confirme = false
    this.comprovante = true
  }

}

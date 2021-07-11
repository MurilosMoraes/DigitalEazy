import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recarga',
  templateUrl: './recarga.page.html',
  styleUrls: ['./recarga.page.scss'],
})
export class RecargaPage implements OnInit {

  infos = true
  comprovante = false

  constructor() { }

  ngOnInit() {
  }

  openInfos() {
    this.infos = true
    this.comprovante = false
  }

  openComprovante() {
    this.infos = false
    this.comprovante = true
  }

}

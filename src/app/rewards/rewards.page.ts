import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {

  principal = true
  negativo = false
  mudou = false
  positivo = false
  infos = false
  home = false
  parceiros = false
  digitalEazy = false

  constructor() { }

  ngOnInit() {
  }

  openPrincipal() {
    this.principal = true
    this.negativo = false
    this.mudou = false
    this.positivo = false
    this.infos = false
    this.home = false
    this.parceiros = false
    this.digitalEazy = false
  }

  openNegativo() {
    this.principal = false
    this.negativo = true
    this.mudou = false
    this.positivo = false
    this.infos = false
    this.home = false
    this.parceiros = false
    this.digitalEazy = false
  }

  openMudou() {
    this.principal = false
    this.negativo = false
    this.mudou = true
    this.positivo = false
    this.infos = false
    this.home = false
    this.parceiros = false
    this.digitalEazy = false
  }

  openPositivo() {
    this.principal = false
    this.negativo = false
    this.mudou = false
    this.positivo = true
    this.infos = false
    this.home = false
    this.parceiros = false
    this.digitalEazy = false
  }

  openInfos() {
    this.principal = false
    this.negativo = false
    this.mudou = false
    this.positivo = false
    this.infos = true
    this.home = false
    this.parceiros = false
    this.digitalEazy = false
  }


  openHome() {
    this.principal = false
    this.negativo = false
    this.mudou = false
    this.positivo = false
    this.infos = false
    this.home = true
    this.parceiros = false
    this.digitalEazy = false
  }

  openParceiros() {
    this.principal = false
    this.negativo = false
    this.mudou = false
    this.positivo = false
    this.infos = false
    this.home = false
    this.parceiros = true
    this.digitalEazy = false
  }

  openDigitalEazy() {
    this.principal = false
    this.negativo = false
    this.mudou = false
    this.positivo = false
    this.infos = false
    this.home = false
    this.parceiros = false
    this.digitalEazy = true
  }


}

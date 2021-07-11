import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  lobby = true
  dados = false
  config = false

  constructor() { }

  ngOnInit() {
  }

  openLobby() {
    this.lobby = true
    this.dados = false
    this.config = false
  }

  openDados() {
    this.lobby = false
    this.dados = true
    this.config = false
  }

  openConfig() {
    this.lobby = false
    this.dados = false
    this.config = true
  }

}

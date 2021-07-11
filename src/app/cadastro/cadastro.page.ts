import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  lobby = true
  cpf = false 
  email = false
  endereco = false
  senha = false
  docFrente = false
  docVerso = false
  facematch = false

  constructor() { }

  ngOnInit() {
  }

  openLobby(){
    this.lobby = true
    this.cpf = false 
    this.email = false
    this.endereco = false
    this.senha = false
    this.docFrente = false
    this.docVerso = false
    this.facematch = false
  }

  
  openCpf(){
    this.lobby = false
    this.cpf = true 
    this.email = false
    this.endereco = false
    this.senha = false
    this.docFrente = false
    this.docVerso = false
    this.facematch = false
  }

  
  openEmail(){
    this.lobby = false
    this.cpf = false 
    this.email = true
    this.endereco = false
    this.senha = false
    this.docFrente = false
    this.docVerso = false
    this.facematch = false
  }

  
  openEndereco(){
    this.lobby = false
    this.cpf = false 
    this.email = false
    this.endereco = true
    this.senha = false
    this.docFrente = false
    this.docVerso = false
    this.facematch = false
  }

  
  openSenha(){
    this.lobby = false
    this.cpf = false 
    this.email = false
    this.endereco = false
    this.senha = true
    this.docFrente = false
    this.docVerso = false
    this.facematch = false
  }

  
  openDocFrente(){
    this.lobby = false
    this.cpf = false 
    this.email = false
    this.endereco = false
    this.senha = false
    this.docFrente = true
    this.docVerso = false
    this.facematch = false
  }

  
  openDocVerso(){
    this.lobby = false
    this.cpf = false 
    this.email = false
    this.endereco = false
    this.senha = false
    this.docFrente = false
    this.docVerso = true
    this.facematch = false
  }

  
  openFacematch(){
    this.lobby = false
    this.cpf = false 
    this.email = false
    this.endereco = false
    this.senha = false
    this.docFrente = false
    this.docVerso = false
    this.facematch = true
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.page.html',
  styleUrls: ['./deposito.page.scss'],
})
export class DepositoPage implements OnInit {
  
  dados = true
  gerado = false

  constructor() { }

  ngOnInit() {
  }

  openDados(){
    this.dados = true;
    this.gerado = false

  }

  openGerado(){
    this.dados = false;
    this.gerado = true
  }

}

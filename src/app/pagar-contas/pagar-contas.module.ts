import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarContasPageRoutingModule } from './pagar-contas-routing.module';

import { PagarContasPage } from './pagar-contas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarContasPageRoutingModule
  ],
  declarations: [PagarContasPage]
})
export class PagarContasPageModule {}

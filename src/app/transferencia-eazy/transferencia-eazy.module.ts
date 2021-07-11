import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferenciaEazyPageRoutingModule } from './transferencia-eazy-routing.module';

import { TransferenciaEazyPage } from './transferencia-eazy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferenciaEazyPageRoutingModule
  ],
  declarations: [TransferenciaEazyPage]
})
export class TransferenciaEazyPageModule {}

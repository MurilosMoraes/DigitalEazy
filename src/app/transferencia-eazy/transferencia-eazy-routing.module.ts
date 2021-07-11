import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferenciaEazyPage } from './transferencia-eazy.page';

const routes: Routes = [
  {
    path: '',
    component: TransferenciaEazyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferenciaEazyPageRoutingModule {}

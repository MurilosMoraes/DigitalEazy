import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagarContasPage } from './pagar-contas.page';

const routes: Routes = [
  {
    path: '',
    component: PagarContasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagarContasPageRoutingModule {}

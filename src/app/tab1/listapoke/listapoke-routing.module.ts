import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListapokePage } from './listapoke.page';

const routes: Routes = [
  {
    path: '',
    component: ListapokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListapokePageRoutingModule {}

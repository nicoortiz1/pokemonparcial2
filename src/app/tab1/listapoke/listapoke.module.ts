import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListapokePageRoutingModule } from './listapoke-routing.module';

import { ListapokePage } from './listapoke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListapokePageRoutingModule
  ],
  declarations: [ListapokePage]
})
export class ListapokePageModule {}

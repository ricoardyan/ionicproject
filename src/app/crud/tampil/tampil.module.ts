import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TampilPageRoutingModule } from './tampil-routing.module';

import { TampilPage } from './tampil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TampilPageRoutingModule
  ],
  declarations: [TampilPage]
})
export class TampilPageModule {}

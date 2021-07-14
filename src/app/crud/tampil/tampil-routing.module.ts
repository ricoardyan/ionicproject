import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TampilPage } from './tampil.page';

const routes: Routes = [
  {
    path: '',
    component: TampilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TampilPageRoutingModule {}

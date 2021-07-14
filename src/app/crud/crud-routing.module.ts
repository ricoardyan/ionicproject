import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudPage } from './crud.page';

const routes: Routes = [
  {
    path: '',
    component: CrudPage
  },
  {
    path: 'tampil',
    loadChildren: () => import('./tampil/tampil.module').then( m => m.TampilPageModule)
  },
  {
    path: 'tambah',
    loadChildren: () => import('./tambah/tambah.module').then( m => m.TambahPageModule)
  },
  {
    path: 'detail/:id_produk',
    loadChildren: () => import('../Crud/detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudPageRoutingModule {}

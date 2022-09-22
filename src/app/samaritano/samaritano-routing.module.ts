import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SamaritanoPage } from './samaritano.page';

const routes: Routes = [
  {
    path: '',
    component: SamaritanoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamaritanoPageRoutingModule {}

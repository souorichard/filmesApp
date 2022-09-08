import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemFerroPage } from './homem-ferro.page';

const routes: Routes = [
  {
    path: '',
    component: HomemFerroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemFerroPageRoutingModule {}

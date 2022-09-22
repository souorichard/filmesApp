import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JurassicWorldODominioPage } from './jurassic-world-o-dominio.page';

const routes: Routes = [
  {
    path: '',
    component: JurassicWorldODominioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JurassicWorldODominioPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThorAmorETrovaoPage } from './thor-amor-e-trovao.page';

const routes: Routes = [
  {
    path: '',
    component: ThorAmorETrovaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThorAmorETrovaoPageRoutingModule {}

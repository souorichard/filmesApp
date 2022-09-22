import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThorAmorETrovaoPageRoutingModule } from './thor-amor-e-trovao-routing.module';

import { ThorAmorETrovaoPage } from './thor-amor-e-trovao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThorAmorETrovaoPageRoutingModule
  ],
  declarations: [ThorAmorETrovaoPage]
})
export class ThorAmorETrovaoPageModule {}

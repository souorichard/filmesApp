import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemFerroPageRoutingModule } from './homem-ferro-routing.module';

import { HomemFerroPage } from './homem-ferro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemFerroPageRoutingModule
  ],
  declarations: [HomemFerroPage]
})
export class HomemFerroPageModule {}

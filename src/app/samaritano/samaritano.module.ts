import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SamaritanoPageRoutingModule } from './samaritano-routing.module';

import { SamaritanoPage } from './samaritano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SamaritanoPageRoutingModule
  ],
  declarations: [SamaritanoPage]
})
export class SamaritanoPageModule {}

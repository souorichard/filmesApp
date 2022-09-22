import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JurassicWorldODominioPageRoutingModule } from './jurassic-world-o-dominio-routing.module';

import { JurassicWorldODominioPage } from './jurassic-world-o-dominio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JurassicWorldODominioPageRoutingModule
  ],
  declarations: [JurassicWorldODominioPage]
})
export class JurassicWorldODominioPageModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'homem-de-ferro',
    loadChildren: () => import('./homem-ferro/homem-ferro.module').then( m => m.HomemFerroPageModule)
  },

  {
    path: 'a-fera',
    loadChildren: () => import('./a-fera/a-fera.module').then( m => m.AFeraPageModule)
  },
  {
    path: 'samaritano',
    loadChildren: () => import('./samaritano/samaritano.module').then( m => m.SamaritanoPageModule)
  },
  {
    path: 'thor-amor-e-trovao',
    loadChildren: () => import('./thor-amor-e-trovao/thor-amor-e-trovao.module').then( m => m.ThorAmorETrovaoPageModule)
  },
  {
    path: 'jurassic-world-o-dominio',
    loadChildren: () => import('./jurassic-world-o-dominio/jurassic-world-o-dominio.module').then( m => m.JurassicWorldODominioPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

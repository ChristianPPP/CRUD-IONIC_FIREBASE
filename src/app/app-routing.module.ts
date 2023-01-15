import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { AppComponent } from './app.component';
import { ActualizarComponent } from './actualizar/actualizar.component';

const routes: Routes = [
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'folder/Actualizar/:id',
    component: ActualizarComponent
  },
  {
    path: 'crear',
    component: CrearComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

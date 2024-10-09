// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './core/layout/layout.module';

const routes: Routes = [
//   { path: '', component: HomeComponent }, // Ruta por defecto
//   { path: 'about', component: AboutComponent }, // Ruta a la página "About"
//   { path: 'user/login', component: UserLoginComponent }, // Ruta a la página "Login"
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SharedModule,
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

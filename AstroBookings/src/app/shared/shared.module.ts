import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParametricLinkComponent } from './componentes/parametric-link/parametric-link.component';



@NgModule({
  declarations: [
    ParametricLinkComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParametricLinkComponent
  ]
})
export class SharedModule { }

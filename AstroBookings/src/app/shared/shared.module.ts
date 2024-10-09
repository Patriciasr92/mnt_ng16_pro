import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParametricLinkComponent } from './componentes/parametric-link/parametric-link.component';
import { UIModule } from './ui/ui.module';



@NgModule({
  declarations: [
    ParametricLinkComponent
  ],
  imports: [
    CommonModule,
    UIModule
  ],
  exports:[
    ParametricLinkComponent
  ]
})
export class SharedModule { }

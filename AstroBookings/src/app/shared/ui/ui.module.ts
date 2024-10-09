import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonAtom } from './button.atom';

@NgModule({
  declarations: [
    ButtonAtom
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonAtom
  ]
})
export class UIModule { }

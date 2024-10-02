import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parametric-link',
  templateUrl: './parametric-link.component.html',
  styleUrls: ['./parametric-link.component.css']
})
export class ParametricLinkComponent {
  @Input() linkText: string = ''; // Texto del enlace
  @Input() linkUrl: string = '';  // URL del enlace
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title: string = '';  // Titulo de la Cabecera

  links: {linkUrl:string, linkText: string}[] = [];

  constructor(){
    this.links= [
      {linkUrl:"/", linkText: "Home"},
      {linkUrl:"/about", linkText: "About"},
      {linkUrl:"/user/login", linkText: "Login"}
    ]
  }
}

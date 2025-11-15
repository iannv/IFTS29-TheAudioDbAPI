import { Component, ViewEncapsulation } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.css',
  encapsulation: ViewEncapsulation.None,
})
export class Header {

}

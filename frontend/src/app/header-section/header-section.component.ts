import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  constructor(public authService: AuthService) { }
  Location:any
  prix:any;

  Prix() {
    this.authService.maxPrix = this.prix;
    console.log("aa" + this.authService.maxPrix);
  }
}

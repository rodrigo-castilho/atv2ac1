import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBanner: boolean = true;

  toggleBanner(): void {
    this.showBanner = !this.showBanner;
  }

}

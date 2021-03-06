import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'test-bold';

  constructor(private sharedService: SharedService) {
  }

  setStatusNavBar(status): void {
    this.sharedService.sideBarEnable(status);
  }
}

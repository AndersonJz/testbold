import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public sideBarStatus = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.getStatusBar();
  }

  getStatusBar(): void {
    this.sharedService.sidebarActived.subscribe(status => this.sideBarStatus = status);
  }
  setStatusSideBar(status: boolean): void {
    this.sharedService.sideBarEnable(status);
  }
}

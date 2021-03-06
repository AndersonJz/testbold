import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

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

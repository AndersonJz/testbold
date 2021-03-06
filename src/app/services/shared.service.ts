import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public sidebarActived = new Subject<any>();

  constructor() { }

  sideBarEnable(status: boolean): void {
    this.sidebarActived.next(status);
  }
}

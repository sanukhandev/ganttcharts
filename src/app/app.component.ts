import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testProject';
  menuItems : MenuItemModel[] = []

  constructor() {
    this.menuItems = [
      {
          text: 'Task Manager',
      }
  ];
  }

}


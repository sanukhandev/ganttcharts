import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditSettingsModel, GanttComponent } from '@syncfusion/ej2-angular-gantt';
import { DataService } from 'src/app/service/data.service';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskManagerComponent implements OnInit {
  data: any = []
  taskSettings: object = {};
  editDialogFields: object[] = [];
  resourceNameMapping: string = '';
  resourceIdMapping: string = '';
  resources: object[] = [];
  labelSettings: object = {};
  editSettings!: EditSettingsModel;
  @ViewChild('gantt')
  ganttObj!: GanttComponent;
  columns: ({ field: string; width: number; } | { field: string; width?: undefined; })[];
  projectStartDate: Date = new Date();
  projectEndDate: Date = new Date();
  splitterSettings: { columnIndex: number; };

  constructor(private dataService: DataService) {

    
  }
  ngOnInit(): void {

  }

  add(): void {
    this.getRemoteTaskData()
  };

  getRemoteTaskData = () => {
    this.dataService.getRemoteTask()
      .subscribe(resource => {
        this.data = resource;
      });
  }

}

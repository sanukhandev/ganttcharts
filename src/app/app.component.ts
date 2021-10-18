import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testProject';
  ganttData: { TaskID: number; TaskName: string; StartDate: Date; EndDate: Date; subtasks: { TaskID: number; TaskName: string; StartDate: Date; Duration: number; Progress: number; }[]; }[];
  taskSettings: { id: string; name: string; startDate: string; endDate: string; duration: string; progress: string; dependency: string; child: string; };
  editSettings: { allowAdding: boolean; allowEditing: boolean; allowDeleting: boolean; allowTaskbarEditing: boolean; showDeleteConfirmDialog: boolean; };
  toolbar: string[];

  
  constructor(private dataService: DataService){
    this.ganttData = this.dataService.getTaskData()
    this.taskSettings = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      endDate: 'EndDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
  };
  this.taskSettings = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
};
this.editSettings = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
};
this.toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
  }
}


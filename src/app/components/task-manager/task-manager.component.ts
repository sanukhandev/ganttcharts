import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { EditSettingsModel, GanttComponent, Gantt } from '@syncfusion/ej2-angular-gantt';
import { DataService } from 'src/app/service/data.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
// declare var jsPDF: any;
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
  showGanttChart: boolean = false;

  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    // this.getRemoteTaskData()

  }

  add(): void {
    this.getRemoteTaskData()
  };

  export() : void {
    window.scrollTo(0, 0);
    const data = document.getElementById("test") as HTMLElement; 
    data.style.display = "inline-flex"
    // let data = document.getElementById("maindiv");
    console.log(data);  
    let doc = new jsPDF('l', 'cm', 'a4'); //Generates PDF in landscape mode
    
    html2canvas(data, { 
      width: data.scrollWidth, 
      height: data.scrollHeight
    }).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/jpeg', 1.0)
      console.log(contentDataURL);  
      let pdf = new jsPDF('p', 'cm', 'a4'); //Generates PDF in landscape mode
      // let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in portrait mode
      data.style.display = "block"
      const hratio = pdf.internal.pageSize.getHeight() / canvas.height
      const wratio =  pdf.internal.pageSize.getWidth() / canvas.width;
      let ratio = wratio > hratio ? hratio : wratio

      pdf.addImage(contentDataURL, 'PNG', 0, 0, canvas.width * ratio, canvas.height * ratio);  
      pdf.save('Filename.pdf');   
    }); 
  }
  ngAfterViewInit(): void {
    // this.getRemoteTaskData()
    // this.showGanttChart = true;
  }

  getRemoteTaskData = () => {
    this.dataService.getRemoteTask()
      .subscribe(resource => {
        this.data = resource;
      });
  }

}

import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej-gannt-chart',
  templateUrl: './ej-gannt-chart.component.html',
  styleUrls: ['./ej-gannt-chart.component.scss']
})
export class EjGanntChartComponent implements OnInit {

  @Input()
  data: any;
  taskSettings: { id: string; name: string; startDate: string; endDate: string; duration: string; progress: string; dependency: string; child: string; };
  projectStartDate: Date;
  projectEndDate: Date;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
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

    this.projectStartDate = new Date('03/24/2019');
    this.projectEndDate = new Date('07/06/2019');
  }

}

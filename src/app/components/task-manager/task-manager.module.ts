import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditService, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { EjGanntChartComponent } from './ej-gannt-chart/ej-gannt-chart.component';


@NgModule({
  declarations: [TaskManagerComponent, EjGanntChartComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    GanttModule,

  ],
  providers: [EditService,]
})
export class TaskManagerModule { }

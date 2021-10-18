import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { TaskManagerComponent } from './task-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TaskManagerComponent],
  imports: [
    CommonModule,
    TaskManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TaskManagerModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit {
  taskForm: FormGroup;


  constructor(private fb: FormBuilder,) {
    this.taskForm = this.fb.group({
      'taskid':[],
      'taskName':[],
      'taskStartDate':[],
      'taskEndDate':[],
      'taskParentId':[]
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log("WIp");
    
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  myUrl: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getTaskData = () => {
    return [
      {
        TaskID: 1,
        TaskName: 'Project Initiation',
        StartDate: new Date('10/02/2020'),
        EndDate: new Date('10/21/2019'),
        subtasks: [
          { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('10/02/2020'), Duration: 4, Progress: 30 },
          { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('10/10/2020'), Duration: 4, Progress: 20 },
          {
            TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('10/16/2020'), Duration: 4, Progress: 50, subtasks: [
              { TaskID: 5, TaskName: 'new Sub', StartDate: new Date('10/02/2020'), Duration: 4, Progress: 30 },

            ]
          },
        ]
      },

    ];
  }

  getRemoteTask = () => {
   return this.http.get(`${this.myUrl}/get-task-list`)
  }
}

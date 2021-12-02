import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Doctor';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-doc-tasks',
  templateUrl: './doc-tasks.component.html',
  styleUrls: ['./doc-tasks.component.scss']
})
export class DocTasksComponent implements OnInit {
  @Input() task!: Task
  @Input() doctors!: Doctor[]

  constructor() { }
  
  ngOnInit(): void {
  }

  toggleCompleted(task:Task){
    task.completed = !task.completed
  }

}

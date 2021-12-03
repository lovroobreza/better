import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Doctor';
import { Task } from 'src/app/Task';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  doctors:Doctor[] = [];
  tasks:Task[] = []

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService.getDoctors().subscribe((doctor)=> this.doctors = doctor)
  }

  viewDoc(doctor: Doctor){
    this.fetchService.showTasks(doctor).subscribe(task=> this.tasks = task)
  }
}
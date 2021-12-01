import { Component, OnInit } from '@angular/core';
import { FetchService } from 'src/app/services/fetch.service';
import { Doctor } from 'src/app/Doctor';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  doctors:Doctor[] = []
  strin:string = ''

  constructor(private fetchService: FetchService) {}

  ngOnInit(): void {
    this.fetchService.getDoctors().subscribe((doctor)=> this.doctors = doctor)
  }

  viewDoc(doctor:Doctor){
    this.strin = doctor.name
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doctor } from 'src/app/Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  @Input() doctor!: Doctor
  @Output() onDocClick: EventEmitter<Doctor> = new EventEmitter() 
  @Output() changeUi: EventEmitter<Doctor> = new EventEmitter() 

  constructor() {}

  ngOnInit(): void {
  }

  onDetails(doctor:Doctor){
    this.onDocClick.emit(doctor)
  }

}

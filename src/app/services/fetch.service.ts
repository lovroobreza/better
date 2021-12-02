import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../Doctor';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http:HttpClient) { }

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl) 
  }

  showTasks(doctor: Doctor): Observable<Task[]>{
    const url = `${this.apiUrl}/${doctor.id}/todos` 
    return this.http.get<Task[]>(url)
  }
}
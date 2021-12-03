import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Doctor } from '../Doctor';
import { Task } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
}) 

export class FetchService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http:HttpClient) { }

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl) 
  }

  showTasks(doctor: Doctor): Observable<Task[]>{
    const url = `${this.apiUrl}/${doctor.id}/todos` 
    return this.http.get<Task[]>(url)
  }
}
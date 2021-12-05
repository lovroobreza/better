import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { HeaderComponent } from './components/header/header.component';
import { DocTasksComponent } from './components/doc-tasks/doc-tasks.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FetchService } from './services/fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DoctorComponent,
    HeaderComponent,
    DocTasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

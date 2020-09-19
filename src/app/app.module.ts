import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { PendingActivitiesComponent } from './activities/pending-activities/pending-activities.component';
import { CompletedActivitiesComponent } from './activities/completed-activities/completed-activities.component';
import { StudentEntryComponent } from './activities/student-entry/student-entry.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

const routesPath = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", component : HomeComponent},
  {path: "activities", component: ActivitiesComponent, children:[
    {path: "", pathMatch: 'full', redirectTo:'pending'},
    {path: "pending", component: PendingActivitiesComponent},
    {path: "completed", component: CompletedActivitiesComponent},
    {path: "entry", component: StudentEntryComponent}
  ]},
  {path: "about-us", component: AboutUsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    PendingActivitiesComponent,
    CompletedActivitiesComponent,
    StudentEntryComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routesPath)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

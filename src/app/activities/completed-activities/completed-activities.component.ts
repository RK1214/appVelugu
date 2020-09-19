import { Component, OnInit, Input } from '@angular/core';
import { CompletedActivities } from './completed-activities.model';

@Component({
  selector: 'app-completed-activities',
  templateUrl: './completed-activities.component.html',
  styleUrls: ['./completed-activities.component.css']
})
export class CompletedActivitiesComponent implements OnInit {
  @Input() compltedActivity: CompletedActivities;
  constructor() { }

  ngOnInit() {
  }

}

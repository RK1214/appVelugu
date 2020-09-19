<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CompletedActivities } from './completed-activities/completed-activities.model';
import { CompletedActService } from './completed-activities/completed-act.service';
import { PendingActivities } from './pending-activities/pending-activities.model';
import { PendingActService } from './pending-activities/pending-act.service';
>>>>>>> 8d700c5... upgrading angular 4 to angular 10 - rxjs updates

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  constructor( ) { }
  ngOnInit() { }
}

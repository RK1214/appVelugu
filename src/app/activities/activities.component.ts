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
<<<<<<< HEAD
export class ActivitiesComponent implements OnInit {
  constructor( ) { }
  ngOnInit() { }
=======
export class ActivitiesComponent implements OnInit, OnDestroy {
  completedActivities: CompletedActivities[];
  pendingActivities: PendingActivities[];
  pendingActCompleted: PendingActivities;
  currentActivity = 'pending';
  private pendingSubscription: Subscription;
  private completeSubscription: Subscription;
  constructor(private completedActService: CompletedActService,
    private pendingActService: PendingActService) { }

  ngOnInit() {
    this.completedActivities = this.completedActService.getActivities();
    this.completeSubscription = this.completedActService.completedActObserver.subscribe(
      (completedActivity: CompletedActivities[]) => {
        this.completedActivities = completedActivity;
      }
    );
    this.pendingActivities = this.pendingActService.getActivities();
    this.pendingSubscription = this.pendingActService.pendingActObserver.subscribe(
      (pendingActivity: PendingActivities[]) => {
        this.pendingActivities = pendingActivity;
      }
    );
  }
  handleActivities(recievedActivity) {
    this.currentActivity = recievedActivity;
  }

  ngOnDestroy() {
    this.pendingSubscription.unsubscribe();
    this.completeSubscription.unsubscribe();
  }
>>>>>>> c1ee2dc... added prettier and configured changes with prettier
}

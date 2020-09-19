import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CompletedActivities } from './completed-activities/completed-activities.model';
import { CompletedActService } from './completed-activities/completed-act.service';
import { PendingActivities } from './pending-activities/pending-activities.model';
import { PendingActService } from './pending-activities/pending-act.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
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
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CompletedActivities } from './completed-activities.model';
import { CompletedActService } from './completed-act.service';

@Component({
  selector: 'app-completed-activities',
  templateUrl: './completed-activities.component.html',
  styleUrls: ['./completed-activities.component.css']
})
export class CompletedActivitiesComponent implements OnInit, OnDestroy {
  completedActivities: CompletedActivities[];
  private completeSubscription: Subscription;
  constructor(private completedActService: CompletedActService) { }

  ngOnInit() {
    this.completedActivities = this.completedActService.getActivities();
    this.completeSubscription = this.completedActService.completedActObserver.subscribe(
      (completedActivity: CompletedActivities[]) => {
        this.completedActivities = completedActivity;
      }
    );
  }
  ngOnDestroy() {
    this.completeSubscription.unsubscribe();
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { PendingActivities } from './pending-activities.model';
import { CompletedActivities } from '../completed-activities/completed-activities.model';

import { CompletedActService } from '../completed-activities/completed-act.service';
import { PendingActService } from './pending-act.service';

@Component({
  selector: 'app-pending-activities',
  templateUrl: './pending-activities.component.html',
  styleUrls: ['./pending-activities.component.css']
})
export class PendingActivitiesComponent implements OnInit, OnDestroy {
pendingActivities: PendingActivities[];
private pendingSubscription: Subscription;
currentPendingItem  : PendingActivities;
completedActivity : CompletedActivities;
addToComplete = false;
currentId = '';
  constructor(private completedActService: CompletedActService ,
  private pendingActService: PendingActService ) { }

  ngOnInit() {
    this.pendingActivities = this.pendingActService.getActivities();
    this.pendingSubscription = this.pendingActService.pendingActObserver.subscribe(
      (pendingActivity: PendingActivities[]) => {
        this.pendingActivities = pendingActivity;
      }
    );
  }
  displayPrompt(id){
        this.currentId = id;
  }
  cancelAdd(){
    this.currentId = '';
  }
  moveToComplete(id, form1:NgForm){
    this.currentPendingItem = this.pendingActService.getCurrentPendingItem(id);
    this.completedActivity = new CompletedActivities(this.currentPendingItem.id,
    this.currentPendingItem.name,this.currentPendingItem.action,
    this.currentPendingItem.description,form1.value.currentPosition,
    this.currentPendingItem.amount
  );
    this.completedActService.addToCompletedActivities(this.completedActivity);
    this.pendingActService.deleteCurrentPendingItem(this.currentPendingItem.id);
  }
  ngOnDestroy() {
    this.pendingSubscription.unsubscribe();
  }
}

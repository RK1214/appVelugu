import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PendingActivities } from './pending-activities.model';
import { CompletedActivities } from '../completed-activities/completed-activities.model';

import { CompletedActService } from '../completed-activities/completed-act.service';
import { PendingActService } from './pending-act.service';

@Component({
  selector: 'app-pending-activities',
  templateUrl: './pending-activities.component.html',
  styleUrls: ['./pending-activities.component.css']
})
export class PendingActivitiesComponent implements OnInit {
@Input() pendingActivity: PendingActivities;
currentPendingItem  : PendingActivities;
completedActivity : CompletedActivities;
addToComplete = false;
currentId: number;
  constructor(private completedActService: CompletedActService ,
  private pendingActService: PendingActService ) { }

  ngOnInit() {
  }
  displayPrompt(id: number){
        this.currentId = id;
  }
  cancelAdd() {
    this.currentId = 0;
  }
  moveToComplete(id: number, form1:NgForm) {
    this.currentPendingItem = this.pendingActService.getCurrentPendingItem(id);
    this.completedActivity = new CompletedActivities(this.currentPendingItem.id,
    this.currentPendingItem.name,this.currentPendingItem.action,
    this.currentPendingItem.description,form1.value.currentPosition,
    this.currentPendingItem.amount
  );
    this.completedActService.addToCompletedActivities(this.completedActivity);
    this.pendingActService.deleteCurrentPendingItem(this.currentPendingItem.id);
  }
}

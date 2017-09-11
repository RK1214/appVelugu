import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PendingActService } from '../pending-activities/pending-act.service';
import { PendingActivities } from '../pending-activities/pending-activities.model';
@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {
  detailsSubmitted = false;
  constructor(private pendingActService: PendingActService ) { }

  ngOnInit() {
  }
  onAddTask(form: NgForm){
    const value = form.value;
    let pA = this.pendingActService.getActivities();
    let IdList = pA.map(
      (val) => val.id
    );
    let maxId = IdList.sort(function(a,b){
      return b-a;
    });
    //console.log(maxId[0], value.vName, value.vSponserType, value.vDescription, value.vAmount);
    const pendingActivity = new PendingActivities(++maxId[0], value.vName, value.vSponserType, value.vDescription, value.vAmount);
    this.pendingActService.addPendingActivity(pendingActivity);
    this.detailsSubmitted = true;
    form.reset();
  }

}

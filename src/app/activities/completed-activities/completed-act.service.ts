import { Subject } from 'rxjs';
import { CompletedActivities } from './completed-activities.model';
import { Injectable } from "@angular/core";
@Injectable()
export class CompletedActService {
  completedActObserver = new Subject<CompletedActivities[]>();
  private completedActivities: CompletedActivities[] = [
    //new CompletedActivities('Kaveri','Supported for education','description','She has completed her BSC nursing with good percentage',12000),
    //new CompletedActivities('Gowlidoddi Elementary School','Supported for education','description','Distributed Books and Pens to students and provided Keyboards and Mosues for systems',12000)
  ];
getActivities(){
  return this.completedActivities.slice();
}
addToCompletedActivities (completedActivity){
  this.completedActivities.push(completedActivity);
  console.log(this.completedActivities, completedActivity);
  this.completedActObserver.next(this.completedActivities.slice());
}
}

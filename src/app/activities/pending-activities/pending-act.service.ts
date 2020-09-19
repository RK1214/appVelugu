import { EventEmitter } from '@angular/core'
import { Subject } from 'rxjs';

import { PendingActivities } from './pending-activities.model';

export class PendingActService {
  pendingActObserver = new Subject<PendingActivities[]>();
  private pendingActivitiesList: PendingActivities[] = [
    new PendingActivities(1,'Tulasi Ram','Supported for education','He has completed his Intermediate First Year with good percentage',12000)
  ];
getActivities(){
  return this.pendingActivitiesList.slice();
}
addPendingActivity(pendingActivity){
  this.pendingActivitiesList.push(pendingActivity);
  console.log(this.pendingActivitiesList,pendingActivity);
  this.pendingActObserver.next( this.pendingActivitiesList.slice() );
}
getCurrentPendingItem(id){
  let currentItem:PendingActivities[] = this.pendingActivitiesList.filter(function(x){
    return x.id === id;
  });
  return currentItem[0];
}
deleteCurrentPendingItem(id){
  let updatedList = this.pendingActivitiesList.filter(
    x => x.id !== id  );
    this.pendingActivitiesList = updatedList;
    this.pendingActObserver.next( this.pendingActivitiesList.slice() );
}
}

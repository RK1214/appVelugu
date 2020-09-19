import { Component } from '@angular/core';
import { CompletedActService } from './activities/completed-activities/completed-act.service';
import { PendingActService } from './activities/pending-activities/pending-act.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CompletedActService, PendingActService]
})
export class AppComponent {
  title = 'app works!';
}

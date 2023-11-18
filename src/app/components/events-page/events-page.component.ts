import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent {

  constructor(public dialog: MatDialog) { }

  //pop up event detail
  openDialog1() {
    this.dialog.open(DialogComponent, {
      data: { dialogMode: 'event1' }
    });
  }

  openDialog2() {
    this.dialog.open(DialogComponent, {
      data: { dialogMode: 'event2' }
    });
  }

  openDialog3() {
    this.dialog.open(DialogComponent, {
      data: { dialogMode: 'event3' }
    });
  }

}

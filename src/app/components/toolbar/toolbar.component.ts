import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { PeopleTableComponent } from '../people-table';


@Component({
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,MatDialogModule],
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor (public dialog: MatDialog) {}

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open( PeopleTableComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    })
  }
 ngOnInit(): void {}
}

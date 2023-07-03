import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { UserInterface } from './user.interface';
import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
})
export class AppComponent {
  users: UserInterface[] = data;

  drop(event: CdkDragDrop<UserInterface[]>): void {
    console.log('drop', event);
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}

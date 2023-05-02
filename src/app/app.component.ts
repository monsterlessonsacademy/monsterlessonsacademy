import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/services/alert.service';
import { AlertTypeEnum } from './alert/types/alertType.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, AlertComponent],
})
export class AppComponent {
  alertTypes = AlertTypeEnum;

  constructor(private alertService: AlertService) {}

  showAlert(type: AlertTypeEnum): void {
    this.alertService.setAlert({
      text: 'This is text alert',
      type,
    });
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { AlertInterface } from './types/alert.interface';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AlertComponent implements OnInit {
  alert?: AlertInterface;
  timeoutId?: number;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.getAlert().subscribe((alert) => {
      this.alert = alert;
      this.resetTimer();
    });
  }

  resetTimer(): void {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => {
      this.alert = undefined;
    }, 3000);
  }
}

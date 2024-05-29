import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[appMonitor]', standalone: true })
export class MonitorDirective {
  ngOnInit(): void {
    console.log('init');
  }

  ngOnDestroy(): void {
    console.log('destroy');
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent, MonitorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  arr = new BehaviorSubject([
    { id: '1', period: '01-05', date: '01-05' },
    { id: '2', period: '02-05', date: '02-05' },
    { id: '3', period: '03-05', date: '03-05' },
  ]);

  changeArr(): void {
    this.arr.next([
      { id: '1', period: '09-05', date: '09-05' },
      { id: '2', period: '02-05', date: '02-05' },
      { id: '3', period: '03-05', date: '03-05' },
    ]);
  }

  identify(index: any, item: any) {
    return item.period;
  }

  testRenderParent() {
    console.log('testRender parent');
    return true;
  }
}

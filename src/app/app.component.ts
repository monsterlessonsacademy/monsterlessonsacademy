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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  users = new BehaviorSubject([
    { id: '1', name: 'foo' },
    { id: '2', name: 'bar' },
    { id: '3', name: 'baz' },
  ]);

  changeArr(): void {
    this.users.next([
      { id: '1', name: 'foo' },
      { id: '2', name: 'bar' },
      { id: '4', name: 'bazzzzz' },
    ])
  }

  identify(index: any, item: any) {
    return item.id;
  }

  testRenderParent() {
    console.log('testRender parent');
    return true;
  }
}

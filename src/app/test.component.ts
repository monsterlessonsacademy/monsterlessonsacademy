//
//
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './tes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestComponent {
  users: any = [];
}

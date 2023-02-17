import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent, { static: true }) child?: ChildComponent;
  @ViewChild('button', { static: true })
  buttonRef?: ElementRef<HTMLButtonElement>;

  @ViewChildren(ChildComponent) children?: QueryList<ChildComponent>;
  @ViewChildren('button') buttonsRef?: QueryList<ElementRef<HTMLButtonElement>>;

  increment() {
    console.log(this.child);
    this.child?.increment();
  }

  ngAfterViewInit(): void {
    if (this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerHTML = 'fooo';
    }

    this.children?.forEach((child) => console.log('child', child));
    this.buttonsRef?.forEach((buttonRef) => console.log('button', buttonRef));
  }
}

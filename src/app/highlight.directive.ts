import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HightlightDirective implements AfterViewInit {
  @Input() color: string = 'yellow';
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.background = this.color;
  }
}

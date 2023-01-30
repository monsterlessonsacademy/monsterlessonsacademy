import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective implements AfterViewInit {
  @Input() color: string = 'yellow';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.background = this.color;
  }
}

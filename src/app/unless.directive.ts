import {
  AfterViewInit,
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if (condition) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}
}

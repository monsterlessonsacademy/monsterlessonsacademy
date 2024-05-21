import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {
  ComponentPortal,
  DomPortal,
  Portal,
  PortalModule,
  TemplatePortal,
} from '@angular/cdk/portal';

@Component({
  selector: 'app-portal-example-test',
  template: 'This is a component portal',
  standalone: true,
  imports: [],
})
export class PortalExampleTestComponent {}

@Component({
  selector: 'app-portal-example',
  standalone: true,
  imports: [PortalModule],
  template: `
    <div>
      <ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>
    </div>
    <ng-template #templatePortalContent
      >Hello, this is a template portal</ng-template
    >

    <button (click)="selectedPortal = componentPortal">
      Render component portal
    </button>
    <button (click)="selectedPortal = templatePortal">
      Render template portal
    </button>
    <button (click)="selectedPortal = domPortal">Render DOM portal</button>

    <div #domPortalContent>Hello, this is a DOM portal</div>
  `,
})
export class PortalExampleComponent {
  @ViewChild('templatePortalContent')
  templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal!: Portal<any>;
  componentPortal!: ComponentPortal<PortalExampleTestComponent>;
  templatePortal!: TemplatePortal<any>;
  domPortal!: DomPortal<any>;

  constructor(private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    this.componentPortal = new ComponentPortal(PortalExampleTestComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this._viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }
}

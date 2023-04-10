import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
} from '@angular/core';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable()
export class ModalService {
  constructor(
    private resolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const viewRef = content.createEmbeddedView(null);
    this.applicationRef.attachView(viewRef);
    const componentRef = factory.create(this.injector, viewRef.rootNodes);
    componentRef.instance.size = options?.size;
    componentRef.instance.title = options?.title;
    componentRef.hostView.detectChanges();
    this.document.body.appendChild(componentRef.location.nativeElement);
  }
}

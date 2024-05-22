import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { CdkPortal, PortalModule } from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [PortalModule],
  template: `
    <ng-template cdkPortal>
      <div class="modal">
        <div class="modal__header">
          <ng-content select="[modal-header]"></ng-content>
          <button (click)="closeModal.emit()">Close</button>
        </div>
        <div class="modal__body">
          <ng-content select="[modal-body]"></ng-content>
        </div>
      </div>
    </ng-template>
  `,
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @ViewChild(CdkPortal) portal: CdkPortal | undefined;
  @Output() closeModal = new EventEmitter<void>();

  overlay = inject(Overlay);
  overlayConfig = new OverlayConfig({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
    scrollStrategy: this.overlay.scrollStrategies.block(),
    minWidth: 500,
  });
  overlayRef = this.overlay.create(this.overlayConfig);

  ngOnInit(): void {
    this.overlayRef.backdropClick().subscribe(() => {
      this.closeModal.emit();
    });
  }

  ngAfterViewInit(): void {
    this.overlayRef?.attach(this.portal);
  }

  ngOnDestroy(): void {
    this.overlayRef?.detach();
    this.overlayRef?.dispose();
  }
}

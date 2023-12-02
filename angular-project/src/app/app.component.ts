import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import * as LR from '@uploadcare/blocks';
// LR.FileUploaderRegular.shadowStyles = `
//   :host {
//     --darkmode: 1;
//   }
//   :host lr-simple-btn button {
//     background: teal;
//     color: white;
//   }
//   :host lr-simple-btn button:hover {
//     background: teal;
//   }
// `;
LR.registerBlocks(LR);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent implements OnInit {
  @ViewChild('ctxProvider', { static: true }) ctxProviderRef!: ElementRef<
    typeof LR.UploadCtxProvider.prototype
  >;
  uploadedFiles: LR.OutputFileEntry[] = [];

  ngOnInit(): void {
    this.ctxProviderRef.nativeElement.addEventListener(
      'data-output',
      this.handleUploadEvent
    );
    this.ctxProviderRef.nativeElement.addEventListener(
      'done-flow',
      this.handleDoneFlow
    );
  }

  handleUploadEvent = (e: Event) => {
    if (!(e instanceof CustomEvent)) return;

    if (e.detail) {
      this.uploadedFiles = e.detail as LR.OutputFileEntry[];
    }
  };

  handleDoneFlow = () => {
    console.log('handleDoneFlow');
  };

  handleRemoveClick(uuid?: string) {
    console.log('handleRemoveClick', uuid);
  }
}

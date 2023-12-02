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
//   :host lr-simple-btn button {
//     background: teal;
//     color: white;
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
  @ViewChild('ctxProvider', { static: true }) ctxProvider!: ElementRef<
    typeof LR.UploadCtxProvider.prototype
  >;
  uploadedFiles: LR.OutputFileEntry[] = [];

  ngOnInit(): void {
    this.ctxProvider.nativeElement.addEventListener(
      'data-output',
      this.handleUploadEvent
    );
    this.ctxProvider.nativeElement.addEventListener(
      'done-flow',
      this.handleDoneFlow
    );
  }

  handleUploadEvent = (e: Event) => {
    if (!(e instanceof CustomEvent)) {
      return;
    }

    if (e.detail) {
      this.uploadedFiles = e.detail as LR.OutputFileEntry[];
    }
  };

  handleDoneFlow = () => {
    console.log('handleDoneFlow');
  };
}

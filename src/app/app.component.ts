import { Component } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  filestackApiKey = environment.filestackApiKey;

  uploadSuccess(res: object) {
    console.log('uploadSuccess', res);
  }

  uploadError(err: any) {
    console.log('###uploadError', err);
  }
}

import { Component, OnInit } from '@angular/core';
import { WorkerResponse } from './app.worker';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  worker = new Worker(new URL('./app.worker', import.meta.url));
  result: number = 0;
  startHeavyCalculation(): void {
    console.log('start heavy calculations');
    this.worker.postMessage({
      type: 'LOG',
      payload: { message: 'started heavy calculations' },
    });

    this.worker.postMessage({ type: 'SUM', payload: { start: 0 } });
    // worker.postMessage({ type: 'SUM', payload: { a: 5, b: 3 } });
    // let result = 0;
    // for (let i = 0; i < 10000000000; i++) {
    //   result += i;
    // }
    // this.result = result;
    console.log('finish heavy calculations');
  }

  checkIfFrozen(): void {
    console.log('I am not frozen');
  }

  ngOnInit(): void {
    this.worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
      const { type, payload } = event.data;
      switch (type) {
        case 'SUM':
          console.log('Result:', payload);
          this.result = payload;
          break;
        case 'LOG':
          console.log('Message:', payload);
          break;
        case 'ERROR':
          console.log('Error:', payload);
          break;
      }
    };
  }
}

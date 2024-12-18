export type WorkerAction =
  | { type: 'LOG'; payload: { message: string } }
  | { type: 'SUM'; payload: { start: number } }
  | { type: 'GREETING'; payload: { name: string } };

export type WorkerResponse =
  | { type: 'LOG'; payload: string }
  | { type: 'SUM'; payload: number }
  | { type: 'ERROR'; payload: string };

// export class TypedWorker extends Worker {
// override postMessage(message: WorkerAction): void {
//   super.postMessage(message);
// }
// }

addEventListener('message', (event: MessageEvent<WorkerAction>) => {
  const { type, payload } = event.data;
  try {
    switch (type) {
      case 'SUM': {
        const result = sum(payload.start);
        postMessage({ type: 'SUM', payload: result });
        break;
      }
      case 'LOG': {
        postMessage({
          type: 'LOG',
          payload: `${payload.message} in worker`,
        });
        break;
      }
      default:
        throw new Error(`Unknown action type: ${type}`);
    }
  } catch (error: unknown) {
    postMessage({ type: 'ERROR', payload: (error as Error).message });
  }
});

const sum = (start: number): number => {
  let result = start;
  for (let i = 0; i < 10000000000; i++) {
    result += i;
  }
  return result;
};

// addEventListener('message', (event: MessageEvent<WorkerAction>) => {
//   console.log('worker onmessage', event.data);
//   const { type, payload } = event.data;

//   try {
//     switch (type) {
//       case 'SUM': {
//         const result = sum();
//         postMessage({ type: 'RESULT', payload: result });
//         break;
//       }
//       case 'GREETING': {
//         const message = `Hello, ${payload.name}!`;
//         postMessage({ type: 'GREETING', payload: message });
//         break;
//       }
//       default:
//         throw new Error(`Unknown action type: ${type}`);
//     }
//   } catch (error: unknown) {
//     postMessage({ type: 'ERROR', payload: (error as Error).message });
//   }
// });

// const sum = (): number => {
//   let result = 0;
//   for (let i = 0; i < 10000000000; i++) {
//     result += i;
//   }
//   return result;
// };

export type WorkerAction =
  | { type: 'LOG'; payload: { message: string } }
  | { type: 'SUM'; payload: { start: number } };

export type WorkerResponse =
  | { type: 'LOG'; payload: string }
  | { type: 'SUM'; payload: number }
  | { type: 'ERROR'; payload: string };

addEventListener('message', (event: MessageEvent<WorkerAction>) => {
  const { type, payload } = event.data;

  try {
    switch (type) {
      case 'SUM':
        const result = sum(payload.start);
        postMessage({ type: 'SUM', payload: result });
        break;
      case 'LOG':
        postMessage({ type: 'LOG', payload: `${payload.message} in worker` });
        break;
      default:
        throw new Error(`Unknow action type: ${type}`);
    }
  } catch (err) {
    postMessage({ type: 'ERROR', payload: (err as Error).message });
  }
});

const sum = (start: number): number => {
  let result = start;
  for (let i = 0; i < 10000000000; i++) {
    result += i;
  }
  return result;
};

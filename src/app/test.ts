//

import { concatMap, of } from 'rxjs';

const firstRequest$ = of(1);
const secondRequest$ = of(2);

const result$ = firstRequest$.pipe(concatMap((firstRequest) => secondRequest$));

result$.subscribe(console.log);

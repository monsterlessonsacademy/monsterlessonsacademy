import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewRef,
  inject,
} from '@angular/core';
import { UsersService } from './users-service';
import { ActivatedRoute } from '@angular/router';
import { Subject, filter, map, takeUntil } from 'rxjs';

const getPageParam = () => {
  return inject(ActivatedRoute).queryParams.pipe(
    filter((params) => params['page']),
    map((params) => params['page'])
  );
};

const onDestroy = () => {
  const destroy$ = new Subject<void>();
  const viewRef = inject(ChangeDetectorRef) as ViewRef;

  viewRef.onDestroy(() => {
    destroy$.next();
    destroy$.complete();
  });

  return destroy$;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  usersService = inject(UsersService);
  page$ = getPageParam();
  destroy$ = onDestroy();

  ngOnInit(): void {
    this.usersService
      .getUsers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
  }
}

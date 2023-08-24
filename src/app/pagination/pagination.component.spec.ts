import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { first } from 'rxjs';
import { UtilsService } from '../utils.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const mockUtilsService = {
    range: () => [1, 2, 3, 4, 5],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginationComponent],
      providers: [{ provide: UtilsService, useValue: mockUtilsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.total = 50;
    component.limit = 10;
    component.currentPage = 1;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('renders correct pagination', () => {
    const pageContainers = fixture.debugElement.queryAll(
      By.css('[data-testid="page-container"]')
    );

    expect(pageContainers.length).toBe(5);
    expect(pageContainers.at(0)?.nativeElement.textContent).toEqual(' 1 ');
  });

  it('should emit a clicked page', () => {
    const pageContainers = fixture.debugElement.queryAll(
      By.css('[data-testid="page-container"]')
    );
    let clickedPage: number | undefined;

    component.pageChangeEvent.pipe(first()).subscribe((page) => {
      clickedPage = page;
    });

    pageContainers.at(0)?.triggerEventHandler('click');

    expect(clickedPage).toEqual(1);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherGoodTableComponent } from './another-good-table.component';

describe('AnotherGoodTableComponent', () => {
  let component: AnotherGoodTableComponent;
  let fixture: ComponentFixture<AnotherGoodTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherGoodTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherGoodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherGoodTableRowComponent } from './another-good-table-row.component';

describe('AnotherGoodTableRowComponent', () => {
  let component: AnotherGoodTableRowComponent;
  let fixture: ComponentFixture<AnotherGoodTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnotherGoodTableRowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AnotherGoodTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

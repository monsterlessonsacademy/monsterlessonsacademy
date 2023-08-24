import { FooComponent } from './foo.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('FooComponent', () => {
  let component: FooComponent;
  let fixture: ComponentFixture<FooComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });
});

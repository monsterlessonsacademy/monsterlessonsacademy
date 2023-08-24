import { By } from '@angular/platform-browser';
import { ErrorMessageComponent } from './errorMessage.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorMessageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create component', () => {
    expect(component).toBeTruthy();
  });

  it('renders default error state', () => {
    const messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );

    expect(messageContainer.nativeElement.textContent).toBe(
      'Something went wrong'
    );
  });

  it('renders custom error message', () => {
    component.message = 'Email is already taken';

    fixture.detectChanges();

    const messageContainer = fixture.debugElement.query(
      By.css('[data-testid="message-container"]')
    );

    expect(messageContainer.nativeElement.textContent).toBe(
      'Email is already taken'
    );
  });
});

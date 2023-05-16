import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlaUsersComponent } from './mla-users.component';

describe('MlaUsersComponent', () => {
  let component: MlaUsersComponent;
  let fixture: ComponentFixture<MlaUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlaUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MlaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

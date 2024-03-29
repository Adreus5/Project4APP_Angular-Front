import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLogInComponent } from './button-log-in.component';

describe('ButtonLogInComponent', () => {
  let component: ButtonLogInComponent;
  let fixture: ComponentFixture<ButtonLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

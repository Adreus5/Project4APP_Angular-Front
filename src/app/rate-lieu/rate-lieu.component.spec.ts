import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateLieuComponent } from './rate-lieu.component';

describe('RateLieuComponent', () => {
  let component: RateLieuComponent;
  let fixture: ComponentFixture<RateLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RateLieuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RateLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

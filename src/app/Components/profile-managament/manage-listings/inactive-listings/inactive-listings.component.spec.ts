import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveListingsComponent } from './inactive-listings.component';

describe('InactiveListingsComponent', () => {
  let component: InactiveListingsComponent;
  let fixture: ComponentFixture<InactiveListingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InactiveListingsComponent]
    });
    fixture = TestBed.createComponent(InactiveListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

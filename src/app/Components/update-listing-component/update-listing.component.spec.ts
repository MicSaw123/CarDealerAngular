import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListingComponent } from './update-listing.component';

describe('UpdateListingComponentComponent', () => {
  let component: UpdateListingComponent;
  let fixture: ComponentFixture<UpdateListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateListingComponent]
    });
    fixture = TestBed.createComponent(UpdateListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

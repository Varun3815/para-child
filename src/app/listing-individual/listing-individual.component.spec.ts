import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingIndividualComponent } from './listing-individual.component';

describe('ListingIndividualComponent', () => {
  let component: ListingIndividualComponent;
  let fixture: ComponentFixture<ListingIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingIndividualComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

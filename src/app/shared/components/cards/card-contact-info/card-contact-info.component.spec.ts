import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardContactInfoComponent } from './card-contact-info.component';

describe('CardContactInfoComponent', () => {
  let component: CardContactInfoComponent;
  let fixture: ComponentFixture<CardContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

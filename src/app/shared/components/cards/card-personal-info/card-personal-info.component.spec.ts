import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonalInfoComponent } from './card-personal-info.component';

describe('CardPersonalInfoComponent', () => {
  let component: CardPersonalInfoComponent;
  let fixture: ComponentFixture<CardPersonalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPersonalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

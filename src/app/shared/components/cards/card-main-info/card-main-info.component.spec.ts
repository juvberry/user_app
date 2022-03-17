import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMainInfoComponent } from './card-main-info.component';

describe('CardMainInfoComponent', () => {
  let component: CardMainInfoComponent;
  let fixture: ComponentFixture<CardMainInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMainInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

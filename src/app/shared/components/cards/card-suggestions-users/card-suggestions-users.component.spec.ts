import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSuggestionsUsersComponent } from './card-suggestions-users.component';

describe('CardSuggestionsUsersComponent', () => {
  let component: CardSuggestionsUsersComponent;
  let fixture: ComponentFixture<CardSuggestionsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSuggestionsUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSuggestionsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

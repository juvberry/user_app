import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnUnfollowComponent } from './btn-unfollow.component';

describe('BtnUnfollowComponent', () => {
  let component: BtnUnfollowComponent;
  let fixture: ComponentFixture<BtnUnfollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnUnfollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnUnfollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

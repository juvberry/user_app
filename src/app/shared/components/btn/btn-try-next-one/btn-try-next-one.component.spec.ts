import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnTryNextOneComponent } from './btn-try-next-one.component';

describe('BtnTryNextOneComponent', () => {
  let component: BtnTryNextOneComponent;
  let fixture: ComponentFixture<BtnTryNextOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnTryNextOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnTryNextOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

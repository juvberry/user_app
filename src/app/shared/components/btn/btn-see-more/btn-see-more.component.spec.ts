import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSeeMoreComponent } from './btn-see-more.component';

describe('BtnSeeMoreComponent', () => {
  let component: BtnSeeMoreComponent;
  let fixture: ComponentFixture<BtnSeeMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnSeeMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

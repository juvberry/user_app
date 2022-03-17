import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFollowingUsersComponent } from './btn-following-users.component';

describe('BtnFollowingUsersComponent', () => {
  let component: BtnFollowingUsersComponent;
  let fixture: ComponentFixture<BtnFollowingUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFollowingUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnFollowingUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

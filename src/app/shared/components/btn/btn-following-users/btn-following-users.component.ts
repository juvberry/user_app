import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-following-users',
  templateUrl: './btn-following-users.component.html',
  styleUrls: ['./btn-following-users.component.scss']
})
export class BtnFollowingUsersComponent implements OnInit {

  panelOpenState = false
  
  constructor() { }

  ngOnInit(): void {
  }

}

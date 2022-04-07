import { Component, OnInit } from '@angular/core';

// service
import { UserListService } from '../services/user-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  users:any
  oneUser:any
  
  constructor(private userListService:UserListService) { }

  ngOnInit(): void {
  }
  
  unfollowUser(e:any){
    this.oneUser = this.userListService.removeUser(e)
  }
  
}

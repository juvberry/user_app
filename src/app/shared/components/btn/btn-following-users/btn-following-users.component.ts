import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { UserListService } from 'src/app/services/user-list.service';


@Component({
  selector: 'app-btn-following-users',
  templateUrl: './btn-following-users.component.html',
  styleUrls: ['./btn-following-users.component.scss']
})
export class BtnFollowingUsersComponent implements OnInit {

  @Input() users:any;
  @Output() following:any = new Subject()
  @Output() unfollow:any = new Subject()

  panelOpenState = false
  
  constructor(private userListService:UserListService) { }

  ngOnInit(): void {
    this.showFollowing()
  }

  showFollowing(){
    this.users = this.userListService.getStorage()
  }

  btnUnfollow(user:any){
    this.unfollow.next(user)
  }

}

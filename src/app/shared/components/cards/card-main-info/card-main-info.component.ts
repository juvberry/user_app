import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-main-info',
  templateUrl: './card-main-info.component.html',
  styleUrls: ['./card-main-info.component.scss']
})

export class CardMainInfoComponent implements OnInit {

  constructor() { }
  @Input() mainUser:any
  @Output() nextUser:any = new Subject();
  @Output() follow:any = new Subject();
  @Output() unfollow:any = new Subject();

  following = false

  ngOnInit(): void {
  }

  btnNext(){
    this.checkIfFollowing()
    this.nextUser.next(true)
  }

  btnFollow(){
    this.follow.next(this.mainUser)
  }

  btnUnfollow(){
    this.unfollow.next(this.mainUser)
    this.checkIfFollowing()
    this.nextUser.next(true)
  }

  checkIfFollowing(){
    const storage = localStorage.getItem('followingUsers');
    if(storage){
      let s = JSON.parse(storage);
      let f = s.find((s:any) => {return s.email == this.mainUser.email})
      
      if(f){
        return true;
      }else{
        return false
      }
    }else{
      return false
    }
  }
  

}

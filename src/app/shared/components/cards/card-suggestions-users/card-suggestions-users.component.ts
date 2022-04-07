import { Component, OnInit,Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card-suggestions-users',
  templateUrl: './card-suggestions-users.component.html',
  styleUrls: ['./card-suggestions-users.component.scss']
})
export class CardSuggestionsUsersComponent implements OnInit {

  constructor() { }
  @Input() user: any;
  @Input() mainUser: any;
  @Input() smallUser: any;
  @Output() follow: any = new Subject();

  ngOnInit(): void {
  }

  btnFollow(){
    this.follow.next(this.user)
  }

}

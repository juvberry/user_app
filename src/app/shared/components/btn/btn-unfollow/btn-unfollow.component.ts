import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-unfollow',
  templateUrl: './btn-unfollow.component.html',
  styleUrls: ['./btn-unfollow.component.scss']
})
export class BtnUnfollowComponent implements OnInit {

  constructor() { }

  @Input() large = false;
  
  ngOnInit(): void {
  }

}

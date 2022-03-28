import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-follow',
  templateUrl: './btn-follow.component.html',
  styleUrls: ['./btn-follow.component.scss']
})
export class BtnFollowComponent implements OnInit {

  constructor() { }

  @Input() small = false;

  ngOnInit(): void {
  }

}

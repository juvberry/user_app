import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {
  
  @Input() mainUser:any;
  @Input() typeCard:any;

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.typeCard)
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout'

import { state } from '@angular/animations';

// service
import { UserListService } from 'src/app/services/user-list.service';
import Swiper from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  constructor(private userListService:UserListService, public breakpointObserver:BreakpointObserver) {}

  users:Array<any> = [];
  mainUser:any;
  smallScreen:any;

  ngOnInit(): void {
    this.getSuggestionUsers();
    this.getMainUser();
    this.isSmallScreen();
  }

  // busca um novo usuario
  newUser(){
    this.userListService.getUser().subscribe((res: any) => {
      res.results[0].fromApi = true;
      this.users.push(res.results[0]);
    })
  }

  // adiciona os 4 usuarios na suggestionList
  getSuggestionUsers(){
    for(let index = 0; index < 4; index++) {
      this.newUser()
    }
  }
  
  // o primeiro usuario deve ser a Julia = myMainUser
  getMainUser(){
    this.mainUser = this.userListService.myMainUser()
  }

  // faz com que o 1o usuario apareça no mainCard ao clicar no tryNextOne
  updateUsersArray(e:any){
    let usersTemp = [...this.users];
    let firstUser = usersTemp[0];

    this.mainUser = firstUser
    usersTemp.splice(0,1);
    this.users = usersTemp

    this.newUser()
  }

  // tira o usuario followed e insere um novo no suggestionList, além de adicionar o followed no localStorage
  addNewSuggestionUser(e:any){
    let userIndex = this.users.findIndex((user:any) => {
      return user.email == e.email
    })
    if(userIndex > -1){
      this.users.splice(userIndex, 1)
    }

    this.homeSetStorage(e)

    this.newUser()
  }

  // traz a setStorage e faz com que o usuario followed apareça no mainCard
  homeSetStorage(e:any){
    this.mainUser = this.userListService.setStorage(e)
  }
  
  unfollowUser(e:any){
    this.mainUser = this.userListService.removeUser(e)
  }
  
  // confere o tamanho da tela usando o breakpointObserver. Caso seja small (600 ate 959) ou xsmall(<599), retorna propriedade smallScreen true
  isSmallScreen(){
    this.breakpointObserver
    .observe(['(max-width: 767px)'])
    .subscribe((state: BreakpointState) => {
      if(state.matches){
        this.smallScreen = true;
        console.log('pequena tela funciona < 767')
      } else {
        console.log('tela maior que 767')
      }
    })
  }

  getLast(swiperParam: any){
    const lastSwipe = swiperParam;
    if(lastSwipe.isEnd){
      this.newUser()
    }
  }

}

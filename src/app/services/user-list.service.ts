import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserListService {

  baseUrl: string = 'https://randomuser.me/api/';

  mainUser = {
      "name": {
        "first": "Julia",
        "last": "Beims"
      },
      "location": {
        "country": "Brazil",
        "state": "Paraná",
        "city": "Curitiba",
        "street": {
          "name": "Rua Eng Bernardino",
          "number": "4"
        },
        "postcode": "82970330"
      },
      "email": "julia.dvb@gmail.com",
      "dob": {
        "date": "1993-01-12T04:30:00.047Z",
        "age": 29
      },
      "registered": {
        "age": 7,
      },
      "cell": "+55 41 995156661",
      "picture": {
        "large": "../../../../assets/img/woman-img.jpeg",
      },
      fromApi: false
  }

  constructor(private http:HttpClient) { }

  // obtem o objeto user
  getUser():Observable<any>{
    return this.http.get<any>(this.baseUrl);
  }

  // traz o objeto do main user
  myMainUser():any{
    return this.mainUser
  }

  // grava o usuario followed no localStorage e retorna o usuario que precisa aparecer
  setStorage(e:any){
    let user = []

    const storageUsers = localStorage.getItem('followingUsers')
    if(storageUsers){
      user = JSON.parse(storageUsers)
    }

    user.push(e)
    this.mainUser = e

    localStorage.setItem('followingUsers', JSON.stringify(user))
    return this.mainUser
  }

  getStorage(){
    const storageUsers = localStorage.getItem('followingUsers')
    if(storageUsers){
      return JSON.parse(storageUsers)
    }
  }

  removeUser(e:any){
    let storage = this.getStorage()

    let userIndex = storage.findIndex((user:any) => {
      return user.email == e.email
    })
    if(userIndex > -1){
      storage.splice(userIndex, 1)
    }

    localStorage.setItem('followingUsers', JSON.stringify(storage))
  }

}

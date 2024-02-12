import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../Models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  globalUserSubject!: BehaviorSubject<any>;

  constructor() {
    let user = localStorage.getItem('user');
    if (user) {
      this.globalUserSubject = new BehaviorSubject(JSON.parse(user));
    } else {
      this.globalUserSubject = new BehaviorSubject(null);
    }
  }

  getUser(): IUser {
    return this.globalUserSubject.value;
  }
  setUser(user: IUser) {
    this.globalUserSubject.next(user);
  }
  removeUser() {
    this.globalUserSubject.next(null);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = `${environment.baseUrl}/users`;

  constructor(private httpClient: HttpClient) {}

  login(user: IUser): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(
      `${this.baseUrl}?username=${user.username}&password=${user.password}`
    );
  }

  register(user: IUser): Observable<IUser> {
    return this.httpClient.post<IUser>(this.baseUrl, user);
  }

  getUserFromApi(id: string): Observable<IUser> {
    return this.httpClient.get<IUser>(`${this.baseUrl}/${id}`);
  }
}

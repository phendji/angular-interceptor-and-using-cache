import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IAuthSession } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:9090/api/auth/login';
  
  constructor(private http: HttpClient) { }
  
  login(user: IUser): Observable<IAuthSession> {
    return this.http.post<IAuthSession>(this.url, user);
  }
  
}

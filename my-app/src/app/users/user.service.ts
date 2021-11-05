import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users');
  }

  getById(id: string | number) {
    const req$ = this.httpClient.get<User>('http://jsonplaceholder.typicode.com/users/' + id);

    if (id == 2) {
      return req$.pipe(
        delay(5000),
      );
    }

    return req$;
  }

  create(user: User) {
    return this.httpClient.post<User>('http://jsonplaceholder.typicode.com/users', user);
  }
}

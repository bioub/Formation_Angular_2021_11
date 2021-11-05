import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.httpClient.get<User>('http://jsonplaceholder.typicode.com/users/' + id);
  }

  create(user: User) {
    return this.httpClient.post<User>('http://jsonplaceholder.typicode.com/users', user);
  }
}

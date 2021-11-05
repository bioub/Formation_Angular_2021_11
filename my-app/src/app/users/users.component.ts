import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { User } from './user.model';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // private title: Title;
  // private httpClient: HttpClient;

  // constructor(title: Title, httpClient: HttpClient) {
  //   this.title = title;
  //   this.httpClient = httpClient;
  //  }
  users: User[] = [];

  constructor(private title: Title, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.title.setTitle('Users List');
    this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      });
  }

}

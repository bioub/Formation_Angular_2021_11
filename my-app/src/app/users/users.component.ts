import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

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
  users: {id: number; name: string}[] = [];

  constructor(private title: Title, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.title.setTitle('Users List');
    this.httpClient.get<{id: number; name: string}[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      });
  }

}

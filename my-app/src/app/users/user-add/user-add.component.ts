import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    phone: new FormControl(''),
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // this.userForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })
    // this.userForm.get('name').
  }

  createUser() {
    this.userService.create(this.userForm.value).subscribe((userFromServer) => {
      console.log(userFromServer);
      this.userService.add.emit(userFromServer);
      this.router.navigateByUrl('/users');
    });
  }
}

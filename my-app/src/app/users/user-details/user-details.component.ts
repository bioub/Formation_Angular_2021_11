import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // 2 problèmes :
    // - callback hell
    // - le bug si je clique sur un autre user alors que la première requete n'est pas terminée
    // et que la seconde se termine avant
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get('userId') as string).subscribe((user) => {
    //     this.user = user;
    //   });
    // });

    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) =>
          this.userService.getById(paramMap.get('userId') as string)
        )
      )
      .subscribe((user) => {
        this.user = user;
      });
  }
}

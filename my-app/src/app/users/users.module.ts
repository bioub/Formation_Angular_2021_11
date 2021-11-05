import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UserAddComponent,
    UserDetailsComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ]
})
export class UsersModule { }

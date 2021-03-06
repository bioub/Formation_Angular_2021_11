import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users/user.service';
import { of } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    // equivalent au import ECMAScript pour les templates
    BrowserModule,
    HttpClientModule,
    SharedModule,
    TodosModule,
    UsersModule,
    AppRoutingModule, // en dernier car contient la route **
  ],
  providers: [
    // {
    //   provide: UserService,
    //   useValue: {
    //     getAll() {
    //       return of([{ id: 1, name: 'Toto' }]);
    //     },
    //   },
    // },
    // {
    //   provide: UserService,
    //   useFactory: () => {
    //     return {
    //       getAll() {
    //         return of([{ id: 1, name: 'Toto' }]);
    //       },
    //     }
    //   },
    // },
    // {
    //   provide: UserService,
    //   useClass: UserService
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

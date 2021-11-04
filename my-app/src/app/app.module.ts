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

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [ // equivalent au import ECMAScript pour les templates
    BrowserModule,
    SharedModule,
    TodosModule,
    UsersModule,
    AppRoutingModule, // en dernier car contient la route **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

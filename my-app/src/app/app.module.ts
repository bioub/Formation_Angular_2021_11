import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [ // equivalent au import ECMAScript pour les templates
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TodosModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';
import { SelectComponent } from './select/select.component';
import { HighlightDirective } from './highlight.directive';
import { KebabcasePipe } from './kebabcase.pipe';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ClockComponent,
    UserFormComponent,
    CounterComponent,
    MultiStateButtonComponent,
    SelectComponent,
    HighlightDirective,
    KebabcasePipe,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // donne accès à ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

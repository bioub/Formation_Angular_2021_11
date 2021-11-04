import { NgModule } from '@angular/core';

import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TodosRoutingModule,
  ]
})
export class TodosModule { }

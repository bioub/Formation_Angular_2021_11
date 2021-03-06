import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'my-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  @Input() items!: Todo[];
  @Output() delete = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }
}

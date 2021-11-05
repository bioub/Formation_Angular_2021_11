import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [
    {
      id: 1,
      title: 'ABC',
      completed: false,
    },
    {
      id: 2,
      title: 'DEF',
      completed: true,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  deleteTodo(todo: Todo) {
    const indexTodo = this.todos.indexOf(todo);
    this.todos.splice(indexTodo, 1);
  }
}

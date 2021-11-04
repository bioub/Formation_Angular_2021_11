import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

@Output() add = new EventEmitter<Todo>();

  newTodo: Todo = {
    title: '',
    completed: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  addTodo() {
    // pour cloner un objet
    const newTodoClone = {...this.newTodo};

    this.add.emit(newTodoClone);
  }

}

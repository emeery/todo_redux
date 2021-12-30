import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import * as actions from '../../../../store/todos/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css'],
})
export class TodoAddComponent implements OnInit {
  todoInput: FormControl;
  constructor(private store: Store<AppState>) {
    this.todoInput = new FormControl('', Validators.required);
  }

  ngOnInit() {}  //

  onEnter() {
    if (this.todoInput.invalid) return;
    this.store.dispatch(actions.ADD_TODO({ task: this.todoInput.value }));
  }
}

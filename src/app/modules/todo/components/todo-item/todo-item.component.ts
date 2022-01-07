import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../../../../store/todos/todo.actions';


import { AppState } from 'src/app/app.state';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo|any
  @ViewChild('inputRef') inputRef: ElementRef
  task: FormControl
  completed: FormControl
  edit: boolean = false

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    console.log(this.todo)
    this.setControls()
    this.completed.valueChanges.subscribe((res) => {
      console.log(this.todo.id)
      this.store.dispatch(actions.TOGGLE_COMPLETED({id: this.todo.id }))
    })

  }

  setControls() {
    this.task = new FormControl(this.todo.task,Validators.required)
    this.completed = new FormControl(this.todo.completed)
  }

  onEdit() {
    console.log('onedit');
    this.edit = true
    setTimeout(() => {
      this.inputRef.nativeElement.select()
    }, 1)

  }

  onBlur() {

    if(this.task.invalid) {console.log('oyeme');}
    if(this.task.value === this.todo.task) return
    this.store.dispatch(actions.UPDATE_TODO({id:this.todo.id, task:this.task.value}))
    this.edit = false
  }
}


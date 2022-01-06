import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  constructor() { }

  ngOnInit(): void {
    console.log(this.todo)
    this.setControls()
  }

  setControls() {
    this.task = new FormControl(this.todo.task,Validators.required)
    this.completed = new FormControl(this.todo.completed)
  }

  onEdit() {
    this.edit = true
    setTimeout(() => {
      this.inputRef.nativeElement.select()
    }, 1);
  }

  onBlur() {
    this.edit = false;
  }
}


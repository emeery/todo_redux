import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../modules/todo/models/todo.model';
import { ADD_TODO } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('salvar al mundo')
];

const _todoReducer = createReducer(initialState,
  on(ADD_TODO, (state, { task}) => [...state, new Todo(task)]))


  export function todoReducer(state:any, action:any) {
    return _todoReducer(state, action)
  }

import { createReducer, on } from '@ngrx/store';

import { Todo } from '../../modules/todo/models/todo.model';
import {
  ADD_TODO,
  TOGGLE_COMPLETED,
  UPDATE_TODO,
  DELETE_TODO,
} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('worldhello '),
  new Todo('sunset on '),
];

const _todoReducer = createReducer(
  initialState,
  on(ADD_TODO, (state, { task }) => [...state, new Todo(task)]),
  on(TOGGLE_COMPLETED, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      else return todo;
    });
  }),
  on(UPDATE_TODO, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) return { ...todo, task: todo.task };
      else return todo;
    });
  }),
  on(DELETE_TODO, (state, { id }) => state.filter((todo) => todo.id !== id))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}

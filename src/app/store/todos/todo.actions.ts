import { createAction, props } from "@ngrx/store";

export const ADD_TODO = createAction('[TODO] Crear Todo',props<{task:string}>());
export const TOGGLE_COMPLETED = createAction('[TODO] Cambiar estado de la tarea',props<{id:number}>());
export const UPDATE_TODO = createAction('[TODO] Actualiza un todo',props<{id:number,task:string}>())
// export const

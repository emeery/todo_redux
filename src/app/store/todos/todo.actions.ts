import { createAction, props } from "@ngrx/store";



export const ADD_TODO = createAction('[TODO] Crear Todo',props<{task:string}>());

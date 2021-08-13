import { state } from "@angular/animations";
import { createAction,props } from "@ngrx/store";

export const increment=createAction('increment');
export const decrement=createAction('decrement');
export const reset= createAction('reset');
export const AddData=createAction('dataadd',props<{name: string, email: string, state: string, city: string}>());



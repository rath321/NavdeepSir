import { increment,decrement, reset, AddData } from "./counter.actions";
import { Action, createReducer } from "@ngrx/store";
import {initialState} from './counter.state'
import { on } from "@ngrx/store";
import { state } from "@angular/animations";

const _counterReducer =createReducer(initialState, 
    on(increment,(state)=>{
        return{
            ...state,  
            counter: state.counter+1,
        }
    }),
    on(decrement,(state)=>
    {
        return {
            ...state, counter:state.counter-1,
            
        }
    }),
    on(reset, (state)=>
    {
        return{
...state,
counter:0
        }
    }),
   on(AddData, (state, action)=>
   {
       return {
           ...state,
  name:action.name,
  email:action.email,
  state:action.state,
  city:action.city

       }
   })
    
    )

export function counterReducer(state: { counter: number;name:string,email:string,state:string, city:string,},action: Action){
    return _counterReducer(state, action);
}

function dataadd(dataadd: any, arg1: (state: { counter: number; name: never[]; email: never[]; state: never[]; city: never[]; }) => {}): import("@ngrx/store").ReducerTypes<{ counter: number; name: never[]; email: never[]; state: never[]; city: never[]; }, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
    throw new Error("Function not implemented.");
}

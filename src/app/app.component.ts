import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddData, decrement, increment, reset } from './counter/state/counter.actions';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  counter: number | undefined;
  constructor(private fb: FormBuilder,private store:Store<{data:{name: string, email:string, state:string, city:string}}>){


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  RegistrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    
    city: [''],
    state: [''],
   
   
  });
  
onSubmit(){
this.store.dispatch(AddData({name: this.RegistrationForm.value.userName, email:this.RegistrationForm.value.email, state:this.RegistrationForm.value.state, city:this.RegistrationForm.value.state}))


}
  
 
}
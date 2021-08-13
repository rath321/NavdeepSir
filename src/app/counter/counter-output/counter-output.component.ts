import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
counter:number=0
  name: string | undefined;
  email:string | undefined;
  state: string|undefined;
  city:string|undefined;
  constructor(private store: Store<{counter: {counter:number},name:{name:string},email:{email:string},state:{state:string},city:{city:string}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>
    {
      this.counter=data.counter;
    })
    this.store.select('name').subscribe((data)=>
    {
      this.name=data.name;
    })
    this.store.select('email').subscribe((data)=>
    {
      this.email=data.email;
    })
    this.store.select('state').subscribe((data)=>
    {
      this.state=data.state;
    })
    this.store.select('city').subscribe((data)=>
    {
      this.city=data.city;
    })
  }

}

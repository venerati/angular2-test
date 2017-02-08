import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}} </p>
  <p>Address: {{address.street}}, {{address.city}}, {{address.state}}</p>
  <button  (click)="toggleHobbies()">{{showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
  <h3>Hobbies</h3>
	  <ul>
	  	<li *ngFor="let hobbies of hobbies">
	  		{{hobbies}}
	  	</li>
	  </ul>
  </div>
  <form>
  	<label>Name: </label><br />
  	<input type="text" name="name" [(ngModel)]="name" /><br />
  	<label>Email: </label><br />
  	<input type="text" name="email" [(ngModel)]="email" /><br />
  	<label>Address: </label><br />
  	<input type="text" name="address.street" [(ngModel)]="address.street" /><br />
  	<label>City: </label><br />
  	<input type="text" name="address.city" [(ngModel)]="address.city" /><br />
  	<label>State: </label><br />
  	<input type="text" name="address.state" [(ngModel)]="address.state" /><br />
  </form>
  `,
})
export class UserComponent  { 
	name: string; 
	email: string;
	address: address;
	hobbies: string [];
	showHobbies: boolean;

	constructor(){
		this.name = 'James'; 
		this.email = 'James@gmail.com';
		this.address = {
			street:'15 Main st.',
			city:'Dallas',
			state: 'Texas',
		}
		this.hobbies = ['cars', 'computers', 'outdoors'];
		this.showHobbies = false;
	}

	toggleHobbies(){

		if(this.showHobbies == false){
			this.showHobbies = true;
		} else {
			this.showHobbies = false;
		}
		
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}

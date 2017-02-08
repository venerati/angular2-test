import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}} </p>
  <p>Address: {{address.street}}, {{address.city}}, {{address.state}}</p>
  <button  (click)="toggleHobbies()"> show hobbies </button>
  <div *ngIf="showHobbies">
  <h3>Hobbies</h3>
	  <ul>
	  	<li *ngFor="let hobbies of hobbies">
	  		{{hobbies}}
	  	</li>
	  </ul>
  </div>
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
		this.hobbies = ['cars', 'copmuters', 'outdoors'];
		this.showHobbies = false;
	}

	toggleHobbies(){
		this.showHobbies = true;
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}

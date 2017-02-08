import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <p>Email: {{email}} </p>
  <p>Address: {{address.street}}, {{address.city}}, {{address.state}}</p>
  `,
})
export class UserComponent  { 
	name = 'James'; 
	email = 'James@gmail.com';
	address = {
		street:'15 Main st.',
		city:'Dallas',
		state: 'Texas',
	}

	constructor(){
		this.name = 'sammy';
	}
}


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
	name; 
	email;
	address;

	constructor(){
		this.name = 'James'; 
		this.email = 'James@gmail.com';
		this.address = {
			street:'15 Main st.',
			city:'Dallas',
			state: 'Texas',
		}
	}
}


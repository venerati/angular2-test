import { Component } from '@angular/core';
import { PostsService } from 'services/posts.service';


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
	  	<li *ngFor="let hobbies of hobbies; let i = index">
	  		{{hobbies}} <button (click)="deleteHobby(i)">X</button>
	  	</li>
	  </ul>
	  <form (submit)="addHobby(hobby.value)">
	  	<label> Add Hobby: </label><br />
	  	<input type="text" #hobby /><br />
	  </form>	
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
  providers: [PostsService]
})
export class UserComponent  { 
	name: string; 
	email: string;
	address: address;
	hobbies: string [];
	showHobbies: boolean;

	constructor(private postsService: PostsService){
		this.name = 'James'; 
		this.email = 'James@gmail.com';
		this.address = {
			street:'15 Main st.',
			city:'Dallas',
			state: 'Texas',
		}
		this.hobbies = ['cars', 'computers', 'outdoors'];
		this.showHobbies = false;

		this.postsService.getPosts().subscribe(posts => {
			console.log(posts);
		})
	}

	toggleHobbies(){

		if(this.showHobbies == false){
			this.showHobbies = true;
		} else {
			this.showHobbies = false;
		}
		
	}
	addHobby(hobby) {
		this.hobbies.push(hobby);
	}
	deleteHobby(i){
		this.hobbies.splice(i,1);
	}
}

interface address {
	street: string;
	city: string;
	state: string;
}

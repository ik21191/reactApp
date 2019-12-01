import React , {Component} from 'react';
import AuthorDetailsComponent from './AuthorDetailsComponent';

class HelloWorldComponent extends Component {
	
	state = {};
	componentDidMount() {
		this.setState(
			{
				helloWorld: "Hello world from HelloWorldComponent.js"
			}
		);
		}

	render() {
		const myDetails= {firstName: "Imran", lastName : "Khan", age : 35, city : "New Delhi"};
		return (
			<div>
				<h1>{this.state.helloWorld}</h1>
				<h2>{this.state.author}</h2>
			
				{/* Calling AuthorDetailsComponent by setting props. */}
				{/* <AuthorDetailsComponent myDetails= {{firstName: "Imran", lastName : "Khan", age : 35, city : "New Delhi"}}/> */}
				<AuthorDetailsComponent myDetails = {myDetails}/>
			</div>
		);
	}
}

export default HelloWorldComponent;
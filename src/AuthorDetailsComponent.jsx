import React , {Component} from 'react';

class AuthorDetailsComponent extends Component {
	
	//Empty constructor
	constructor(props) {
		super(props);

		this.state = {
			firstName : this.props.myDetails.firstName,
			lastName : this.props.myDetails.lastName,
			age : this.props.myDetails.age,
			city : this.props.myDetails.city
		}
	}
	
	changeCity = () =>{
		this.setState({city : "Lucknow"});
	}

	render() {
		return (
			<div>
				{/* Below details have been set in App.js */}
				<p>First Name : {this.props.myDetails.firstName}</p>
				<p>Last Name : {this.props.myDetails.lastName}</p>
				<p>Age : {this.props.myDetails.age}</p>
				<p>City : {this.props.myDetails.city}</p>
				<p>Enter country: <input type="text"/></p>
				<br/><br/>
				<p>First Name : {this.state.firstName}</p>
				<p>City : {this.state.city}</p>
				<p><input type="button" value="Change City" onClick={this.changeCity}/></p>
			</div>
		);
	}
}

export default AuthorDetailsComponent;
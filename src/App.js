import React , {Component} from 'react';
import HelloWorldComponent from './HelloWorldComponent';

class App extends Component {

	render() {
		return (
			<div>
				{/* Setting props values */}
				<HelloWorldComponent />
			</div>
		);
	}
}

export default App;
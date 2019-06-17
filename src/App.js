import React, { Component } from 'react';
import styled from 'styled-components';
import { Login } from './components/index';

class App extends Component {
	render() {
		const Div = styled.div`
			background: #2b44ff;
		`;
		return (
			<Div>
				<Login />
			</Div>
		);
	}
}

export default App;

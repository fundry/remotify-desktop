import React, { Component } from 'react';
import styled from 'styled-components';
import { Login } from './components/index';

class App extends Component {
	render() {
		const Div = styled.div`
		`;
		return (
			<Div>
				<Login />
			</Div>
		);
	}
}

export default App;

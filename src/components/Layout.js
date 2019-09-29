import React, { Component } from 'react';
import styled from 'styled-components';
import Toolbar from '../components/Navigation/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	};

	sideDrawerClosedHandler = () => {
		this.setState({ showSideDrawer: false });
	};

	sideDrawerToggleHandler = () => {
		this.setState(prevState => {
			return {
				showSideDrawer: !prevState.showSideDrawer
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
				<SideDrawer
					open={this.state.showSideDrawer}
					closed={this.sideDrawerClosedHandler}
				/>
				<Content>{this.props.children}</Content>
			</React.Fragment>
		);
	}
}

const Content = styled.div`
	margin-top: 72px;
`;

export default Layout;

import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationItems from '../Navigation/NavigationItems';
import DrawerToggle from '../Navigation/DrawerToggle';

const toolbar = props => (
	<Toolbar>
		<DrawerToggle clicked={props.drawerToggleClicked} />
		<Logo height='80%' />
		<Nav>
			<NavigationItems />
		</Nav>
	</Toolbar>
);

const Toolbar = styled.div`
	height: 56px;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #703b09;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	box-sizing: border-box;
	z-index: 90;
`;

const Nav = styled.nav`
	height: 100%;
	@media (max-width: 500px) {
		display: none;
	}
`;

export default toolbar;

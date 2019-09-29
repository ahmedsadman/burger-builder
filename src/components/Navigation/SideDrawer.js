import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';
import NavigationItems from '../Navigation/NavigationItems';
import Backdrop from '../UI/Backdrop';

const sideDrawer = props => {
	return (
		<React.Fragment>
			<Backdrop show={props.open} clicked={props.closed} />
			<SideDrawer open={props.open} close={!props.open}>
				<Logo height='11%' />
				<nav>
					<NavigationItems />
				</nav>
			</SideDrawer>
		</React.Fragment>
	);
};

const SideDrawer = styled.div`
	position: fixed;
	width: 280px;
	max-width: 70%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 200;
	background-color: white;
	padding: 32px 16px;
	box-sizing: border-box;
	transition: transform 0.3s ease-out;

	@media (min-width: 500px) {
		display: none;
	}

	${props =>
		props.open &&
		`
        transform: translateX(0);
    `}

	${props =>
		props.close &&
		`
        transform: translateX(-100%);
    `}
`;

export default sideDrawer;

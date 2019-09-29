import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
	<NavigationItems>
		<NavigationItem link='/' active>
			Burger Builder
		</NavigationItem>
		<NavigationItem link='/'>Checkout</NavigationItem>
	</NavigationItems>
);

const NavigationItems = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	align-items: flex-start;
	flex-flow: column;
	height: 100%;

	@media (min-width: 500px) {
		flex-flow: row;
		align-items: center;
	}
`;

export default navigationItems;

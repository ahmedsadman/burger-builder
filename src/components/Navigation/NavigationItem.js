import React from 'react';
import styled from 'styled-components';

const navigationItem = props => (
	<NavigationItem>
		<A href={props.link} active={props.active}>
			{props.children}
		</A>
	</NavigationItem>
);

const NavigationItem = styled.li`
	margin: 0;
	box-sizing: border-box;
	display: flex;
	height: 100%;
	align-items: center;

	@media (min-width: 500px) {
		width: auto;
		height: auto;
		display: block;
		box-sizing: border-box;
	}
`;

const A = styled.a`
	color: white;
	text-decoration: none;
	height: 100%;
	padding: 16px 10px;
	border-bottom: 4px solid transparent;
	box-sizing: border-box;
	display: block;

	&:active,
	&:hover {
		color: #40a4c8;
	}

	${props =>
		props.active &&
		`
        background-color: #8f5c2c;
		border-bottom: 4px solid #40a4c8;
		color: white;
    `}

	@media (max-width: 500px) {
		color: #8f5c2c;
		border: none;
		width: 100%;
		height: auto;

		${props =>
			props.active &&
			`
			background-color: transparent;
			color: #40a4c8;
    	`}
	}
`;

export default navigationItem;

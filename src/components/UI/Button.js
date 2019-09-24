import React from 'react';
import styled from 'styled-components';

const button = props => (
	<Button onClick={props.clicked} danger={props.danger}>
		{props.children}
	</Button>
);

const Button = styled.button`
	background-color: transparent;
	border: none;
	color: white;
	outline: none;
	cursor: pointer;
	font: inherit;
	padding: 10px;
	margin: 10px;
	font-weight: bold;
	color: ${props => (props.danger ? '#944317' : '#5C9210')};
	&:first-of-type {
		margin-left: 0;
		padding-left: 0;
	}
`;

export default button;

import React from 'react';
import styled from 'styled-components';
import burgerLogo from '../assets/images/burger-logo.png';

const logo = props => (
	<Logo height={props.height}>
		<Img src={burgerLogo} alt='Logo' />
	</Logo>
);

const Logo = styled.div`
	background-color: white;
	padding: 8px;
	height: ${props => props.height || '100%'};
	box-sizing: border-box;
	border-radius: 5px;
`;

const Img = styled.img`
	height: 100%;
`;

export default logo;

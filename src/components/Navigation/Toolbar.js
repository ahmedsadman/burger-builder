import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo';

const toolbar = props => (
	<Toolbar>
		<div>Menu</div>
		<Logo />
		<Nav></Nav>
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
`;

export default toolbar;

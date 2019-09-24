import React from 'react';
import styled from 'styled-components';
import Toolbar from '../components/Navigation/Toolbar';

const layout = props => (
	<React.Fragment>
		<Toolbar />
		<Content>{props.children}</Content>
	</React.Fragment>
);

const Content = styled.div`
	margin-top: 72px;
`;

export default layout;

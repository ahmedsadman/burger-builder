import React from 'react';
import styled from 'styled-components';

const layout = props => (
	<React.Fragment>
		<div>Toolbar, Sidebar, Backdrop</div>
		<Content>{props.children}</Content>
	</React.Fragment>
);

const Content = styled.div`
	margin-top: 16px;
`;

export default layout;

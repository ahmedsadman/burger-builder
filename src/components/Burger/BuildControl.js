import React from 'react';
import styled from 'styled-components';

const buildControls = props => (
	<BuildControl>
		<Label>{props.label}</Label>
		<LessButton onClick={props.removed} disabled={props.disabled}>
			Less
		</LessButton>
		<MoreButton onClick={props.added}>More</MoreButton>
	</BuildControl>
);

const BuildControl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 5px 0;
`;

const ControlButton = styled.button`
	display: block;
	font: inherit;
	padding: 5px;
	margin: 0 5px;
	width: 80px;
	border: 1px solid #aa6817;
	cursor: pointer;
	outline: none;

	&:disabled {
		background-color: #ac9980;
		border: 1px solid #7e7365;
		color: #ccc;
		cursor: default;
	}

	&:hover:disabled {
		background-color: #ac9980;
		color: #ccc;
		cursor: not-allowed;
	}
`;

const Label = styled.div`
	padding: 10px;
	font-weight: bold;
	width: 80px;
`;

const LessButton = styled(ControlButton)`
	background-color: #d39952;
	color: white;

	&:hover,
	&:active {
		background-color: #daa972;
		color: white;
	}
`;

const MoreButton = styled(ControlButton)`
	background-color: #8f5e1e;
	color: white;

	&:hover,
	&:active {
		background-color: #99703f;
		color: white;
	}
`;

export default buildControls;

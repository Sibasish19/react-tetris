import styled from 'styled-components';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(
		${props => props.height},
		calc(34.35vw / ${props => props.width})
	);
	grid-template-columns: repeat(${props => props.width}, 1fr);
	grid-gap: 1px;
	border: 3px solid #333;
	width: 100%;
	max-width: 39.5vw;
	background: #111;
`;

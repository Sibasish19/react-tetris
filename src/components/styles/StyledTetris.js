import styled from 'styled-components';

import bgImage from '../../assets/images/bg.png';

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background: url(${bgImage}) #000;
	background-size: cover;
	background-position: center;
	overflow: hidden;
`;

export const StyledTetris = styled.div`
	display: flex;
	align-items: flex-start;
	padding: 0.5rem;
	margin: 0.5rem auto;
	max-width: 900px;

	aside {
		width: 100%;
		max-width: 200px;
		display: block;
		padding: 0 1rem;
	}
`;

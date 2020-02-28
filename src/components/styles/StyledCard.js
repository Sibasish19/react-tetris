import styled from 'styled-components';

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	margin: 0.3rem 2rem;
	padding: 0.5rem;
	border: 0.1rem solid #333;
	min-height: 1rem;
	width: 90%;
	border-radius: 0.15rem;
	color: ${props => (props.gameOver ? 'red' : '#aaa')};
	background: #111;
	font-family: Pixel, Arial, Helvetica, sans-serif;
`;

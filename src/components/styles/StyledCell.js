import styled from 'styled-components';

export const StyledCell = styled.div`
	width: auto;
	background: rgba(${props => props.color}, 0.8);
	border: ${props => (props.type === 0 ? 0 : '0.25rem solid')};
	border-bottom-color: rgba(${props => props.color}, 0.25);
	border-right-color: rgba(${props => props.color}, 1);
	border-top-color: rgba(${props => props.color}, 1);
	border-left-color: rgba(${props => props.color}, 0.5);
`;

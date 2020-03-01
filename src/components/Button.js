import React from 'react';
import { StyledButton } from './styles/StyledButton';

const Button = ({ startGame }) => {
	return <StyledButton onClick={startGame}>Start Game</StyledButton>;
};

export default Button;

import React from 'react';
import { StyledCard } from './styles/StyledCard';

const Card = ({ gameOver, text }) => {
	return <StyledCard gameOver={gameOver}>{text}</StyledCard>;
};

export default Card;

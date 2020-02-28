import React from 'react';
import { StyledCell } from './styles/StyledCell';

import TETROMINOS from '../helpers/tetrominos';

const Cell = ({ type }) => {
	return <StyledCell type={'S'} color={TETROMINOS['S'].color} />;
};

export default Cell;

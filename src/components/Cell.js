import React, { memo } from 'react';
import { StyledCell } from './styles/StyledCell';

import TETROMINOS from '../helpers/tetrominos';

const Cell = ({ type }) => {
	return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default memo(Cell);

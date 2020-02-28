import TETROMINOS from './tetrominos';

export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 15;

export const createStage = () =>
	Array.from(Array(STAGE_HEIGHT), () =>
		new Array(STAGE_WIDTH).fill([0, 'clear'])
	);

export const generateTetrominos = () => {
	const tetrominos = 'IJLOSTZ';
	const randChar = tetrominos[Math.floor(Math.random() * tetrominos.length)];
	return TETROMINOS[randChar];
};

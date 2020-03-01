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

export const detectCollision = (player, stage, { x: moveX, y: moveY }) => {
	const { tetromino, position } = player;
	for (let y = 0; y < tetromino.length; y++) {
		for (let x = 0; x < tetromino[y].length; x++) {
			// Check for a tetromino cell
			if (tetromino[y][x] !== 0) {
				// Move should be inside the play area
				// both in height and width
				const row = y + position.y + moveY;
				const column = x + position.x + moveX;
				// Cell we're moving isn't set to 'clear'
				if (
					!stage[row] ||
					!stage[row][column] ||
					stage[row][column][1] !== 'clear'
				) {
					return true;
				}
			}
		}
	}
};

export const rotate = (matrix, direction) => {
	// Transpose the rows to columns
	const rotatedMatrix = matrix.map((_, index) =>
		matrix.map(col => col[index])
	);
	// Reverse each row as per the direction
	if (direction > 0) {
		return rotatedMatrix.map(row => row.reverse());
	}
	return rotatedMatrix.reverse();
};

const linePoints = [40, 100, 300, 1200];

export const calculateScore = (level, rows) =>
	linePoints[rows - 1] * (level + 1);

import { useState, useEffect } from 'react';
import { createStage } from '../helpers';

export const useStage = (player, resetPlayer) => {
	const [stage, setStage] = useState(createStage());
	const [rowsCleared, setRowsCleared] = useState(0);

	useEffect(() => {
		const { tetromino, position, collided } = player;

		setRowsCleared(0);

		const sweepRows = stage =>
			stage.reduce((acc, curr) => {
				// Check if there are no 0s in any of the cells in current row
				if (curr.findIndex(cell => cell[0] === 0) === -1) {
					// Increament rowsCleared state
					setRowsCleared(prev => prev + 1);
					// Push a cleaered row at the beginning
					acc.unshift(new Array(stage[0].length).fill([0, 'clear']));
					return acc;
				}
				acc.push(curr);
				return acc;
			}, []);

		const updateStage = prevStage => {
			// Use for loop
			const newStage = prevStage.map(row =>
				row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
			);
			// Draw the tetromino
			tetromino.forEach((row, y) => {
				row.forEach((value, x) => {
					if (value !== 0) {
						newStage[y + position.y][x + position.x] = [
							value,
							`${collided ? 'merged' : 'clear'}`
						];
					}
				});
			});
			// reset the player if collided
			if (collided) {
				resetPlayer();
				return sweepRows(newStage);
			}
			return newStage;
		};

		setStage(prev => updateStage(prev));
	}, [player, resetPlayer]);

	return [stage, setStage, rowsCleared];
};

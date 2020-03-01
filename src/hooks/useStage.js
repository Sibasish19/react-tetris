import { useState, useEffect } from 'react';
import { createStage } from '../helpers';

export const useStage = (player, resetPlayer) => {
	const [stage, setStage] = useState(createStage());

	useEffect(() => {
		const { tetromino, position, collided } = player;
		const updateStage = prevStage => {
			// Use for loop
			const newStage = prevStage.map(row =>
				row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
			);
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

			return newStage;
		};

		setStage(prev => updateStage(prev));
	}, [player]);

	return [stage, setStage];
};

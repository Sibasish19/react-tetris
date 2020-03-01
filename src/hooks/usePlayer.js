import { useState, useCallback } from 'react';

import { generateTetrominos, rotate, detectCollision } from '../helpers';

export const usePlayer = () => {
	// Initialize with a blank stage
	const [player, setPlayer] = useState({
		position: { x: 0, y: 0 },
		tetromino: [[0]],
		collided: false
	});

	const updatePlayerPosition = ({ x, y, collided }) => {
		setPlayer(prev => ({
			...prev,
			position: { x: (prev.position.x += x), y: (prev.position.y += y) },
			collided
		}));
	};

	const rotatePlayer = (stage, direction) => {
		const clonedPlayer = JSON.parse(JSON.stringify(player));
		clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction);

		const xPosition = clonedPlayer.position.x;
		let offset = 1;

		// Move a tetromino back and forth in the same row
		while (detectCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
			clonedPlayer.position.x += offset;
			offset = -(offset + offset > 0 ? 1 : -1);
			if (offset > clonedPlayer.tetromino[0].length) {
				rotate(clonedPlayer.tetromino, -direction);
				clonedPlayer.position.x = xPosition;
				return;
			}
		}
		setPlayer(clonedPlayer);
	};

	const resetPlayer = useCallback(() => {
		setPlayer({
			position: { x: 0, y: 0 },
			tetromino: generateTetrominos().shape,
			collided: false
		});
	}, []);

	return [player, updatePlayerPosition, rotatePlayer, resetPlayer];
};

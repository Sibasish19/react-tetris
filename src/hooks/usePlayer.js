import { useState, useCallback } from 'react';

import { generateTetrominos } from '../helpers';

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

	const resetPlayer = useCallback(() => {
		setPlayer({
			position: { x: 0, y: 0 },
			tetromino: generateTetrominos().shape,
			collided: false
		});
	}, []);

	return [player, updatePlayerPosition, resetPlayer];
};

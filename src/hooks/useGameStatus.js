import { useEffect, useState, useCallback } from 'react';
import { calculateScore } from '../helpers';

export const useGameStatus = rowsCleared => {
	const [score, setScore] = useState(0);
	const [rows, setRows] = useState(0);
	const [level, setLevel] = useState(0);

	const populateScore = useCallback(() => {
		// We have more than 1 rows cleared
		if (rowsCleared > 0) {
			// Tetris score calculation formula
			setScore(prev => prev + calculateScore(level, rowsCleared));
			setRows(prev => prev + rowsCleared);
		}
	}, [level, rowsCleared]);

	useEffect(() => {
		populateScore();
	}, [populateScore]);

	return [score, setScore, rows, setRows, level, setLevel];
};

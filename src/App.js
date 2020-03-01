import React, { useState } from 'react';

import './assets/stylesheets/style.css';
import {
	StyledTetrisWrapper,
	StyledTetris
} from './components/styles/StyledTetris';

import { useInterval } from './hooks/useInterval';
import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';
import { useGameStatus } from './hooks/useGameStatus';

import { createStage, detectCollision } from './helpers';

import Button from './components/Button';
import Stage from './components/Stage';
import Card from './components/Card';

const App = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const [
		player,
		updatePlayerPosition,
		rotatePlayer,
		resetPlayer
	] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
		rowsCleared
	);

	const movePlayerSideWise = direction => {
		const position = { x: direction, y: 0 };
		if (!detectCollision(player, stage, position)) {
			updatePlayerPosition(position);
		}
	};

	const startGame = () => {
		setStage(createStage());
		setDropTime(500);
		resetPlayer();
		setGameOver(false);
		setScore(0);
		setRows(0);
		setLevel(0);
	};

	const drop = () => {
		if (rows > (level + 1) * 10) {
			setLevel(prev => prev + 1);
			setDropTime(500 / (level + 1));
		}
		if (!detectCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPosition({ x: 0, y: 1, collided: false });
		} else {
			// Game over
			if (player.position.y < 1) {
				setGameOver(true);
				setDropTime(null);
			}
			updatePlayerPosition({ x: 0, y: 0, collided: true });
		}
	};

	const onKeyDownRelease = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 40) {
				setDropTime(500);
			}
		}
	};

	const dropPlayer = () => {
		setDropTime(null);
		drop();
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			// Left
			if (keyCode === 37) {
				movePlayerSideWise(-1);
			}
			// Right
			else if (keyCode === 39) {
				movePlayerSideWise(1);
			}
			// Down
			else if (keyCode === 40) {
				dropPlayer();
			}
			// Rotate with up arrow
			else if (keyCode === 38) {
				rotatePlayer(stage, 1);
			}
		}
	};

	useInterval(() => {
		drop();
	}, dropTime);

	console.log('*** Re-render ***');

	return (
		<StyledTetrisWrapper
			role='button'
			tabIndex='0'
			onKeyDown={e => move(e)}
			onKeyUp={e => onKeyDownRelease(e)}
		>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Card gameOver={gameOver} text='Game Over...' />
					) : (
						<div>
							<Card text={`Score: ${score}`} />
							<Card text={`Rows: ${rows}`} />
							<Card text={`Level: ${level}`} />
						</div>
					)}
					<Button startGame={startGame} />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default App;

import React, { useState } from 'react';

import './assets/stylesheets/style.css';
import {
	StyledTetrisWrapper,
	StyledTetris
} from './components/styles/StyledTetris';

import { usePlayer } from './hooks/usePlayer';
import { useStage } from './hooks/useStage';

import { createStage } from './helpers';

import Button from './components/Button';
import Stage from './components/Stage';
import Card from './components/Card';

const App = () => {
	const [dropTime, setDropTime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const [player, updatePlayerPosition, resetPlayer] = usePlayer();
	const [stage, setStage] = useStage(player);

	const movePlayer = direction => {
		updatePlayerPosition({ x: direction, y: 0 });
	};

	const startGame = () => {
		setStage(createStage());
		resetPlayer();
	};

	const drop = () => {
		updatePlayerPosition({ x: 0, y: 1, collided: false });
	};

	const dropPlayer = () => {
		drop();
	};

	const move = ({ keyCode }) => {
		if (!gameOver) {
			// Left
			if (keyCode === 37) {
				movePlayer(-1);
			}
			// Right
			else if (keyCode === 39) {
				movePlayer(1);
			}
			// Down
			else if (keyCode === 40) {
				dropPlayer();
			}
		}
	};

	console.log('*** Re-render ***');

	return (
		<StyledTetrisWrapper
			role='button'
			tabIndex='0'
			onKeyDown={e => move(e)}
		>
			<StyledTetris>
				<Stage stage={stage} />
				<aside>
					{gameOver ? (
						<Card gameOver={gameOver} text='Game Over' />
					) : (
						<div>
							<Card text='Score' />
							<Card text='Rows' />
							<Card text='Level' />
						</div>
					)}
					<Button startGame={startGame} />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default App;

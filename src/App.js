import React from 'react';

import './assets/stylesheets/style.css';
import {
	StyledTetrisWrapper,
	StyledTetris
} from './components/styles/StyledTetris';

import { createStage } from './helpers';

import Button from './components/Button';
import Stage from './components/Stage';
import Card from './components/Card';

const App = () => {
	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={createStage()} />
				<aside>
					<div className='score-board'>
						<Card text='Score' />
						<Card text='Rows' />
						<Card text='Level' />
					</div>
					<Button />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default App;

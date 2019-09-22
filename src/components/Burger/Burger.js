import React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredient';

const burger = props => {
	return (
		<Burger>
			<BurgerIngredient type='bread-top' />
			<BurgerIngredient type='cheese' />
			<BurgerIngredient type='meat' />
			<BurgerIngredient type='cheese' />
			<BurgerIngredient type='meat' />
			<BurgerIngredient type='bread-bottom' />
		</Burger>
	);
};

const Burger = styled.div`
	width: 100%;
	margin: auto;
	height: 250px;
	text-align: center;
	font-weight: bold;
	font-size: 1.2rem;

	@media (min-width: 500px) and (min-height: 400px) {
		width: 350px;
		height: 300px;
	}

	@media (min-width: 500px) and (min-height: 401px) {
		width: 450px;
		height: 400px;
	}

	@media (min-width: 1000px) and (min-height: 700px) {
		width: 700px;
		height: 600px;
	}
`;

export default burger;

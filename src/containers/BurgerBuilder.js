import React, { Component } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';

const INGREDIENT_PRICES = {
	salad: 0.5,
	bacon: 0.8,
	cheese: 1.0,
	meat: 1.3
};

class BurgerBuilder extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 4
		};
	}

	addIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;

		const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
	};

	removeIngredientHandler = type => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount - 1;

		if (updatedCount < 0) return; // stop invalid decrease

		const updatedIngredients = {
			...this.state.ingredients
		};
		updatedIngredients[type] = updatedCount;

		const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];

		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		});
	};

	render() {
		// disable remove button when appropirate
		const disabledInfo = { ...this.state.ingredients };

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<React.Fragment>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientRemoved={this.removeIngredientHandler}
					ingredientAdded={this.addIngredientHandler}
					disabled={disabledInfo}
					price={this.state.totalPrice}
				/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;

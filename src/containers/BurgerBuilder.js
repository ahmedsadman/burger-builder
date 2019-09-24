import React, { Component } from 'react';
import Burger from '../components/Burger/Burger';
import BuildControls from '../components/Burger/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Burger/OrderSummary';

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
			totalPrice: 4,
			purchasable: false,
			purchasing: false
		};
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igKey => ingredients[igKey])
			.reduce((sum, el) => sum + el, 0);
		this.setState({ purchasable: sum > 0 });
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

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

		this.updatePurchaseState(updatedIngredients);
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

		this.updatePurchaseState(updatedIngredients);
	};

	render() {
		// disable remove button when appropirate
		const disabledInfo = { ...this.state.ingredients };

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (
			<React.Fragment>
				<Modal
					show={this.state.purchasing}
					modalClosed={this.purchaseCancelHandler}
				>
					<OrderSummary ingredients={this.state.ingredients} />
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls
					ingredientRemoved={this.removeIngredientHandler}
					ingredientAdded={this.addIngredientHandler}
					disabled={disabledInfo}
					purchasable={this.state.purchasable}
					price={this.state.totalPrice}
					ordered={this.purchaseHandler}
				/>
			</React.Fragment>
		);
	}
}

export default BurgerBuilder;

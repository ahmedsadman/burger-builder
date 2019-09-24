import React from 'react';
import Button from '../UI/Button';

const orderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => (
		<li key={igKey}>
			<span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
			{props.ingredients[igKey]}
		</li>
	));

	return (
		<React.Fragment>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>{ingredientSummary}</ul>
			<p>
				<strong>Total Price: {props.price.toFixed(2)}$</strong>
			</p>
			<p>Continue to Checkout?</p>
			<Button danger clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button clicked={props.purchaseContinued}>CONTINUE</Button>
		</React.Fragment>
	);
};

export default orderSummary;

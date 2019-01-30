import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
	const {cart} = value
	return (
		<div>
			<h1 className="container-fluid">
				{cart.map(item => {
					return <CartItem key={item.id} item={item} value={value} /> 
				})}
			</h1>
		</div>
	);
}
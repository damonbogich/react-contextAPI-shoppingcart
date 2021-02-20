import React from 'react';

const Item = (props) => {

	let book = {
		id: props.id,
		title: props.title,
		price: props.price,
		image: props.image
	};
	
	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => props.removeItem(book)}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;

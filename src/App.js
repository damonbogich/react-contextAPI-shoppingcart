import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//context Component
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	console.log(cart, 'cart here');

	const addItem = item => {
		// add the given item to the cart
		if (!cart.includes(item)) {
			setCart([...cart, item]);
		}
	};

	const removeItem = item => {
		console.log(item)
		let newCart = cart.filter((book) => book.id !== item.id)
		console.log(newCart, 'newcart')
		setCart(newCart);
	}

	return (
		<div className="App">
			<CartContext.Provider value={{cart, removeItem}}>
				<Navigation  />
				{/* Routes */}
				<ProductContext.Provider value={{products, addItem}}>
					<Route exact path="/">
						<Products />
					</Route>
				</ProductContext.Provider>
				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;

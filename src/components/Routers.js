import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/home';
import { Products } from '../pages/products';
import { NotFound } from '../pages/notFound';
import { SignUp } from '../pages/signUp';
import { LogIn } from '../pages/logIn';
import { CartOrders } from '../pages/cartOrders';
import { OrdersHistory } from '../pages/ordersHistory';
import { DetailsOrder } from '../pages/detailsOrder';

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='auth/register'
				element={<SignUp />}
			/>
			<Route
				path='auth/login'
				element={<LogIn />}
			/>
			<Route
				path='products'
				element={<Products />}
			/>
			<Route
				path='cartOrders'
				element={<CartOrders />}
			/>
			<Route
				path='ordersHistory'
				element={<OrdersHistory />}
			/>
			<Route
				path='ordersHistory/:id'
				element={<DetailsOrder />}
			/>

			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Routers;

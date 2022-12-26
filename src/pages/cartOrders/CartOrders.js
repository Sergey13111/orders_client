import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Cart } from '../../components/Cart';
import { CartEmpty } from '../../components/CartEmpty';
import styles from './CartOrders.module.css';

const CartOrders = () => {
	const { totalPrice } = useSelector((state) => state.cart);
	if (!totalPrice) {
		return <CartEmpty />;
	}
	return (
		<>
			<Container>
				<h1 className={styles.cartOrdersTitle}>Orders</h1>
				<Cart />
			</Container>
		</>
	);
};

export default CartOrders;

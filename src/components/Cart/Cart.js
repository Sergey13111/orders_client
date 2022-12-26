import { Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearItems, fetchCreateOrder } from '../../store/cartOrdersSlice';
import { CartItem } from '../CartItem';
import styles from './Cart.module.css';

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { items, totalPrice } = useSelector((state) => state.cart);
	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	const onClickClear = () => {
		if (window.confirm('Empty trash?')) {
			dispatch(clearItems());
		}
	};

	const handlerCheckout = async () => {
		try {
			// console.log(items, totalPrice);
			await dispatch(fetchCreateOrder({ items, totalPrice }));
			dispatch(clearItems());
			localStorage.removeItem('cart');
			navigate(`/products`, { replace: true });
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Row>
				<Col className={styles.clearOrdersWrapper}>
					<Button
						onClick={onClickClear}
						variant='outline-secondary'
						className='mb-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='20'
							height='20'
							fill='#dd3b13c1'
							className='bi bi-trash'
							viewBox='0 0 18 18'>
							<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
							<path
								fillRule='evenodd'
								d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
							/>
						</svg>
						<span className={styles.margLeft}>Clear Orders</span>
					</Button>
				</Col>
			</Row>
			{items.map((item) => (
				<CartItem
					key={item._id}
					{...item}
				/>
			))}
			<Row className={styles.overallResultsWrapper}>
				<Col className={styles.overallTotal}>
					<h4>Total goods: </h4>
					<span>{totalCount}</span>
				</Col>
				<Col className={styles.overallTotal}>
					<h4>Order price: </h4>
					<span>{totalPrice} $</span>
				</Col>
			</Row>

			<Row>
				<Col>
					<Button
						onClick={() => navigate(-1)}
						variant='outline-secondary'
						className='my-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-box-arrow-left'
							viewBox='0 0 16 16'>
							<path
								fillRule='evenodd'
								d='M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z'
							/>
							<path
								fillRule='evenodd'
								d='M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z'
							/>
						</svg>
						<span className={(styles.button, styles.margLeft)}>Back</span>
					</Button>
				</Col>
				<Col className={styles.checkoutWrapper}>
					<Button
						onClick={handlerCheckout}
						variant='outline-secondary'
						className='my-4'>
						<span className={styles.button}>Checkout</span>
					</Button>
				</Col>
			</Row>
		</>
	);
};

export default Cart;

import { Col, Row, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../store/cartOrdersSlice';
import styles from './CartItem.module.css';

const CartItem = ({ _id, productName, model, price, imageUrl, count }) => {
	const dispatch = useDispatch();

	const onClickPlus = () => {
		dispatch(addItem({ _id }));
	};

	const onClickMinus = () => {
		dispatch(minusItem({ _id }));
	};

	const onClickRemove = () => {
		if (window.confirm('Do you really want to delete the item?')) {
			dispatch(removeItem(_id));
		}
	};
	return (
		<Row className={styles.tableRow}>
			<Col
				className={styles.col}
				xs={12}
				md={3}>
				<div className={styles.cartItemProductNameWrapper}>
					<div className={styles.productName}>{productName}</div>
					<div>{model}</div>
				</div>
			</Col>
			<Col
				className={styles.col}
				xs={12}
				md={3}>
				<div className={styles.cartItemCount}>
					<Button
						variant='outline-success'
						size='sm'
						disabled={count === 1}
						onClick={onClickMinus}
						className={styles.buttonCount}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-dash'
							viewBox='0 0 16 16'>
							<path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z' />
						</svg>
					</Button>
					<b className='mx-2'>{count}</b>
					<Button
						variant='outline-success'
						size='sm'
						onClick={onClickPlus}
						className={styles.buttonCount}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							className='bi bi-plus'
							viewBox='0 0 16 16'>
							<path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
						</svg>
					</Button>
				</div>
			</Col>
			<Col
				className={styles.col}
				xs={12}
				md={3}>
				<div className={styles.cartItemPrice}>
					<b>{price * count} $</b>
				</div>
			</Col>
			<Col
				xs={12}
				md={3}>
				<div className={styles.cartItemRemove}>
					<Button
						variant='outline-danger'
						onClick={onClickRemove}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							fill='currentColor'
							className='bi bi-x-circle'
							viewBox='0 0 16 16'>
							<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
							<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
						</svg>
						<span className={styles.buttonDeleteItem}>delete</span>
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default CartItem;

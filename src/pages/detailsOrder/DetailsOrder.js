import { useEffect } from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { fetchOneOrder } from '../../store/detailsOrderSlice';
import styles from './DetailsOrder.module.css';

const DetailsOrder = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { id } = useParams();
	const { detailsOrder, status } = useSelector((state) => state.order);

	const isLoading = status === 'loading';

	useEffect(() => {
		dispatch(fetchOneOrder(id));
	}, [dispatch, id]);

	if (isLoading) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	const totalCount = detailsOrder.items.reduce((sum, item) => sum + item.count, 0);

	return (
		detailsOrder && (
			<>
				<Container>
					<Row>
						<Col>
							<h1 className={styles.detailsOrderTitle}>Orders</h1>
						</Col>
					</Row>
					{detailsOrder.items.map(({ _id, productName, model, price, count }) => (
						<Row
							key={_id}
							className={styles.tableRow}>
							<Col
								className={styles.col}
								xs={12}
								md={3}>
								<div className={styles.nameWrapper}>
									<div className={styles.productName}>{productName}</div>
									<div>{model}</div>
								</div>
							</Col>
							<Col
								className={styles.col}
								xs={12}
								md={3}>
								{count} qty
							</Col>
							<Col
								className={styles.col}
								xs={12}
								md={3}>
								{price} $
							</Col>
						</Row>
					))}
					<Row className={styles.overallResultsWrapper}>
						<Col className={styles.overallTotal}>
							<h4>Total goods: </h4>
							<span>{totalCount}</span>
						</Col>
						<Col className={styles.overallTotal}>
							<h4>Order price: </h4>
							<span>{detailsOrder.totalPrice} $</span>
						</Col>
					</Row>
					<Row>
						<Col>
							<Button
								onClick={() => navigate(-1)}
								variant='outline-secondary'
								className='my-3'>
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
								<span>Back</span>
							</Button>
						</Col>
					</Row>
				</Container>
			</>
		)
	);
};

export default DetailsOrder;

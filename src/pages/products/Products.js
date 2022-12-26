import { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../../components/Loader';
import { addItem } from '../../store/cartOrdersSlice';
import { fetchProducts } from '../../store/productsSlice';
import styles from './Products.module.css';

const Products = () => {
	const dispatch = useDispatch();
	const { products, status } = useSelector((state) => state.products);
	const isLoading = status === 'loading';

	useEffect(() => {
		dispatch(fetchProducts());
		window.scrollTo(0, 0);
	}, [dispatch]);

	if (isLoading) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	const handleAddCart =
		(...item) =>
		() => {
			dispatch(addItem(...item));
		};

	return (
		<>
			<Container>
				<h1 className={styles.productsTitle}>Products</h1>
				<div className='my-4'>
					<Row>
						{products &&
							products.map(({ _id, productName, model, description, price, imageUrl }) => (
								<Col
									key={_id}
									md='6'
									xl='4'
									className='mb-4'>
									<Card>
										<Card.Img
											variant='top'
											src={imageUrl || 'https://via.placeholder.com/400.png'}
										/>
										<Card.Body>
											<Card.Title>
												<h3 className={styles.cardTitle}>{productName}</h3>
											</Card.Title>
											<Card.Text>
												<span className={styles.secondTitle}>Model: </span>
												{model}
											</Card.Text>
											<Card.Text>
												<span className={styles.secondTitle}>Description: </span>
												<span className={styles.description}>{description}</span>
											</Card.Text>
											<Card.Text>
												<span className={styles.secondTitle}>Price: </span>
												<span>{price}</span>
											</Card.Text>
											<Button
												onClick={handleAddCart({ _id, productName, model, price, imageUrl })}
												variant='secondary'
												className={styles.button}>
												<div className={styles.buttonText}>Add to Basket</div>
												<div className={styles.svg}>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='30'
														height='30'
														fill='currentColor'
														className='bi bi-cart4'
														viewBox='0 0 20 20'>
														<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
													</svg>
												</div>
											</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
					</Row>
				</div>
			</Container>
		</>
	);
};
export default Products;

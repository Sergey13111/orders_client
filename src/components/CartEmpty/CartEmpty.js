import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './CartEmpty.module.css';

const CartEmpty = () => {
	return (
		<Container>
			<Row>
				<Col className={styles.cartEmptyWrapper}>
					<h2 className={styles.cartEmptyTitle}>Cart is empty</h2>
					<i className={styles.svgCart}>
						<svg
							fill='none'
							height='50'
							viewBox='0 0 30 27'
							width='50'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M1.39999 1.70001H6.60001'
								stroke='#4F4F4F'
								strokeLinecap='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<path
								d='M6.60001 1.70001L11 18.9'
								stroke='#4F4F4F'
								strokeLinecap='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<path
								d='M11.8 18.9H28.3'
								stroke='#4F4F4F'
								strokeLinecap='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<path
								d='M13.8 25.7C15.4569 25.7 16.8 24.3569 16.8 22.7C16.8 21.0432 15.4569 19.7 13.8 19.7C12.1431 19.7 10.8 21.0432 10.8 22.7C10.8 24.3569 12.1431 25.7 13.8 25.7Z'
								stroke='#4F4F4F'
								strokeLinecap='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<path
								d='M25.3 25.7C26.9568 25.7 28.3 24.3569 28.3 22.7C28.3 21.0432 26.9568 19.7 25.3 19.7C23.6431 19.7 22.3 21.0432 22.3 22.7C22.3 24.3569 23.6431 25.7 25.3 25.7Z'
								stroke='#4F4F4F'
								strokeLinecap='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
							<path
								d='M25.7 14.6H11.3C10.7 14.6 10.1 14.2 10 13.6L8.1 6.90001C7.9 6.00001 8.49999 5.20001 9.39999 5.20001H27.5C28.4 5.20001 29.1 6.10001 28.8 6.90001L26.9 13.6C26.9 14.2 26.4 14.6 25.7 14.6Z'
								stroke='#4F4F4F'
								strokeLinecap='round'
								strokeMiterlimit='10'
								strokeWidth='2'
							/>
						</svg>
					</i>

					<Link
						className={styles.linkBack}
						to='/products'>
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
						<span className={styles.backText}>Back</span>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default CartEmpty;

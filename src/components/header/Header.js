import { useEffect, useRef } from 'react';
import { Button, Nav, Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { selectIsAuth, logout } from '../../store/authSlice';
import styles from './Header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const isMounted = useRef(false);
	const isAuth = useSelector(selectIsAuth);
	const { items } = useSelector((state) => state.cart);

	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	const onClickLogout = () => {
		if (window.confirm('Do you really want to leave?')) {
			dispatch(logout());
		}
		localStorage.removeItem('token');
		navigate('/');
	};

	useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items);
			localStorage.setItem('cart', json);
		}
		isMounted.current = true;
	}, [items]);

	return (
		<>
			<Navbar
				collapseOnSelect
				expand='lg'
				bg='dark'
				variant='dark'>
				<Container fluid='md'>
					<Navbar.Brand>
						<Link
							className={styles.navLink}
							to='/'>
							ORDERS
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse
						id='responsive-navbar-nav'
						className='justify-content-end'>
						<Nav className={styles.marginRight}>
							{isAuth ? (
								<>
									<NavLink
										className={styles.navLink}
										to='/products'>
										Products
									</NavLink>
									<NavLink
										className={styles.navLink}
										to='/ordersHistory'>
										History
									</NavLink>
									<NavLink
										className={styles.navLink}
										to='/CartOrders'>
										<div className={styles.svgWrapper}>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='30'
												height='30'
												fill='currentColor'
												className='bi bi-cart4'
												viewBox='0 0 20 20'>
												<path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
											</svg>
											{totalCount > 0 && <span className={styles.cartQuantity}>{totalCount}</span>}
										</div>
									</NavLink>
								</>
							) : (
								<>
									<NavLink
										className={styles.navLink}
										to='/'>
										Home
									</NavLink>
								</>
							)}
						</Nav>
						<Nav className='d-block'>
							{isAuth ? (
								<>
									<Button
										onClick={onClickLogout}
										className={[styles.navLink, styles.buttonNav]}
										variant={'outline-light'}>
										Exit
									</Button>
								</>
							) : (
								<>
									<NavLink to='/auth/register'>
										<Button variant={'outline-light'}>SignUp</Button>
									</NavLink>
									<NavLink
										className={styles.navLink}
										to='/auth/login'>
										<Button variant={'outline-light'}>Login</Button>
									</NavLink>
								</>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;

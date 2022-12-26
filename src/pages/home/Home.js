import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
	return (
		<>
			<Container fluid='md'>
				<div className={styles.homeWrapper}>
					<h2>To view products and ordering:</h2>
					<span className={styles.homeContent}>
						Register{' '}
						<Link
							className={styles.link}
							to='/auth/register'>
							SignUp
						</Link>
					</span>
					<span className={styles.homeContent}>or</span>
					<span className={styles.homeContent}>
						Authorization{' '}
						<Link
							className={styles.link}
							to='/auth/login'>
							LogIn
						</Link>
					</span>
					<span>if you are already logged in, go to the products page</span>
				</div>
			</Container>
		</>
	);
};

export default Home;

import { Row, Col, Spinner } from 'react-bootstrap';
import styles from './Loader.module.css';

const Loader = () => {
	return (
		<>
			<Row mt='5'>
				<Col className={styles.spinnerCenter}>
					<Spinner
						animation='border'
						variant='secondary'
					/>
				</Col>
			</Row>
		</>
	);
};

export default Loader;

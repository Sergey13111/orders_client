import { Container, Row, Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { OrdersHistoryItem } from '../../components/OrdersHistoryItem';

const OrdersHistory = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<h1>Orders history</h1>
					</Col>
				</Row>
				<OrdersHistoryItem />
			</Container>
			<Outlet />
		</>
	);
};

export default OrdersHistory;

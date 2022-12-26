import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
import { Table, Container, Button } from 'react-bootstrap';
import { Loader } from '../../components/Loader';
import { fetchOrdersHistory } from '../../store/ordersHistorySlice';

const OrdersHistoryItem = () => {
	const navigate = useNavigate();
	const { ordersHistory, status } = useSelector((state) => state.ordersHistory);
	const isLoading = status === 'loading';

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchOrdersHistory());
		window.scrollTo(0, 0);
	}, [dispatch]);

	if (isLoading) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	const handleDetail = (_id) => () => {
		navigate(`/ordersHistory/${_id}`);
	};

	return (
		ordersHistory && (
			<>
				<Table
					responsive
					striped>
					<thead>
						<tr>
							<th>ID</th>
							<th>Date</th>
							<th>Totale Price</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ordersHistory.map(({ _id, createdAt, totalPrice }) => (
							<tr key={_id}>
								<td>{_id}</td>
								<td>{createdAt}</td>
								<td>{totalPrice}</td>
								<td>
									<Button
										onClick={handleDetail(_id)}
										variant='secondary'
									>
										Detail
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
				<Outlet />
			</>
		)
	);
};

export default OrdersHistoryItem;

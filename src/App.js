import Routers from './components/Routers';
import { Header } from './components/header';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe } from './store/authSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchAuthMe());
	}, [dispatch]);

	return (
		<>
			<Header />
			<Routers />
		</>
	);
}

export default App;

import { Container, Card } from 'react-bootstrap';
import { AuthForm } from '../../components/AuthForm';

const SignUp = () => {
	return (
		<>
			<Container
				className='d-flex flex-column justify-content-center align-items-center '
				style={{ height: window.innerHeight - 65 }}>
				<h2>Registration</h2>
				<Card
					className='p-3 mt-3'
					style={{ width: '18rem' }}>
					<AuthForm />
				</Card>
			</Container>
		</>
	);
};

export default SignUp;

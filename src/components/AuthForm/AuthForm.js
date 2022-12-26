import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import styles from './AuthForm.module.css';
import { fetchAuth, fetchRegister, selectIsAuth } from '../../store/authSlice';

const AuthForm = () => {
	const isAuth = useSelector(selectIsAuth);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();
	const isLogin = location.pathname === '/auth/login';

	const schema = yup
		.object({
			email: yup.string().email().required(),
			password: yup.string().required().min(5),
		})
		.required();

	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = async (values) => {
		if (isLogin) {
			const data = await dispatch(fetchAuth(values));

			if (!data.payload) {
				return alert('Failed to login!');
			}

			if ('token' in data.payload) {
				window.localStorage.setItem('token', data.payload.token);
			}
		} else {
			const data = await dispatch(fetchRegister(values));

			if (!data.payload) {
				return alert('Failed to login!');
			}

			if ('token' in data.payload) {
				window.localStorage.setItem('token', data.payload.token);
			}
		}
	};

	if (isAuth) {
		return navigate('/products');
	}

	return (
		<>
			<Form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}>
				<Form.Group
					className='mb-3'
					controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						{...register('email')}
						isInvalid={errors.email}
					/>
					<Form.Control.Feedback type='invalid'>{errors.email?.message}</Form.Control.Feedback>
					<Form.Text className='text-muted'></Form.Text>
				</Form.Group>

				<Form.Group
					className='mb-3'
					controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						{...register('password')}
						isInvalid={errors.password}
					/>
					<Form.Control.Feedback type='invalid'>{errors.password?.message}</Form.Control.Feedback>
				</Form.Group>
				<div className={styles.button}>
					{isLogin ? (
						<div>
							Don't have an account?
							<br /> <Link to='/auth/register'>Create an account</Link>
						</div>
					) : (
						<div>
							Have an account?
							<br /> <Link to='/auth/login'>Login</Link>
						</div>
					)}
					<Button
						className=' mt-4 '
						md={{ span: 6, offset: 3 }}
						variant='secondary'
						type='submit'>
						Submit
					</Button>
				</div>
			</Form>
		</>
	);
};

export default AuthForm;

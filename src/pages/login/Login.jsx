import axios from 'axios';
import { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Login.css';

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm' onSubmit={handleSubmit}>
          <input
            type='text'
            className='loginInput'
            placeholder='Username'
            ref={userRef}
          />

          <input
            type='password'
            className='loginInput'
            placeholder='Password'
            ref={passwordRef}
          />
          <button className='loginButton'>Login</button>
        </form>
        <button
          className='loginRegisterButton'
          type='submit'
          disabled={isFetching}>
          <Link className='link' to='/register'>
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;

import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <span className='loginTitle'>Login</span>
        <form className='loginForm'>
          <input type='text' className='loginInput' placeholder='Email' />

          <input
            type='password'
            className='loginInput'
            placeholder='Password'
          />
          <button className='loginButton'>Login</button>
        </form>
        <button className='loginRegisterButton'>
          <Link className='link' to='/register'>
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;

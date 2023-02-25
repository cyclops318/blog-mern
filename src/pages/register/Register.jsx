import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div className='register'>
      <div className='registerWrapper'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm'>
          <input type='text' className='registerInput' placeholder='Username' />

          <input type='text' className='registerInput' placeholder='Email' />

          <input
            type='password'
            className='registerInput'
            placeholder='Password'
          />
          <button className='registerButton'>Register</button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to='/login'>
            Login
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Register;

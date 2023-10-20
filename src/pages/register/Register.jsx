import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post('/auth/register', {
        username,
        email,
        password,
      });
      res.data && navigate('/login');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='register'>
      <div className='registerWrapper'>
        <span className='registerTitle'>Register</span>
        <form className='registerForm' onSubmit={handleSubmit}>
          <input
            type='text'
            className='registerInput'
            placeholder='Username'
            onChange={e => setUsername(e.target.value)}
          />

          <input
            type='text'
            className='registerInput'
            placeholder='Email'
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type='password'
            className='registerInput'
            placeholder='Password'
            onChange={e => setPassword(e.target.value)}
          />
          <button className='registerButton' type='submit'>
            Register
          </button>
        </form>
        <button className='registerLoginButton'>
          <Link className='link' to='/login'>
            Login
          </Link>
        </button>
        {error && <span style={{ color: 'red' }}>Something went wrong!</span>}
      </div>
    </div>
  );
};

export default Register;

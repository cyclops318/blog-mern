import { Link } from 'react-router-dom';
import userAvatar from '../../assets/face-1.jpg';
import './TopBar.css';

const TopBar = () => {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-square-facebook'></i>
        <i className='topIcon fa-brands fa-square-twitter'></i>
        <i className='topIcon fa-brands fa-square-pinterest'></i>
        <i className='topIcon fa-brands fa-square-instagram'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link className='link' to='/'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link className='link' to='/write'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className='topRight'>
        {user ? (
          <img src={userAvatar} alt='avatar' className='topImg' />
        ) : (
          <>
            <Link className='link' to='/login'>
              LOGIN
            </Link>
            <Link className='link' to='/register'>
              REGISTER
            </Link>
          </>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  );
};

export default TopBar;

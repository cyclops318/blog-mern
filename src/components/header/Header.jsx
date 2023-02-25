import HeaderImg from '../../assets/header-img.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headerTitleSm'>React & Node</span>
        <span className='headerTitleLg'>Blog</span>
      </div>
      <img src={HeaderImg} alt='' className='headerImg' />
    </div>
  );
};

export default Header;

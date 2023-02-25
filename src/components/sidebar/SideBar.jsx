import WomenImg from '../../assets/women.jpg';
import './SideBar.css';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>ABOUT ME</span>
        <img src={WomenImg} alt='women' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia
          molestias officiis libero magnam explicabo sit repellendus, qui
          veritatis quidem temporibus.
        </p>
      </div>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>CATEGORIES</span>
        <ul className='sideBarList'>
          <li className='sideBarListItem'>Life</li>
          <li className='sideBarListItem'>Music</li>
          <li className='sideBarListItem'>Style</li>
          <li className='sideBarListItem'>Sport</li>
          <li className='sideBarListItem'>Cinema</li>
          <li className='sideBarListItem'>Tech</li>
        </ul>
      </div>
      <div className='sideBarItem'>
        <span className='sideBarTitle'>FOLLOW US</span>
        <div className='sideBarSocial'>
          <i className='sideBarIcon fa-brands fa-square-facebook'></i>
          <i className='sideBarIcon fa-brands fa-square-twitter'></i>
          <i className='sideBarIcon fa-brands fa-square-pinterest'></i>
          <i className='sideBarIcon fa-brands fa-square-instagram'></i>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

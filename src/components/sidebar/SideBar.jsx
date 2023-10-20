import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WomenImg from '../../assets/women.jpg';
import './SideBar.css';

const SideBar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      const res = await axios.get('/categories');

      setCats(res.data);
    };
    fetchCats();
  }, []);
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
          {cats.map(c => (
            <Link key={c._id} className='link' to={`/?cat=${c.name}`}>
              <li className='sideBarListItem'>{c.name}</li>
            </Link>
          ))}
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

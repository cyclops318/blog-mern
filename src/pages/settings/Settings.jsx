import axios from 'axios';
import { useContext, useState } from 'react';
import SideBar from '../../components/sidebar/SideBar';
import { Context } from '../../context/Context';
import './Settings.css';

const Settings = () => {
  const PF = 'http://localhost:8800/images/';

  const { user, dispatch } = useContext(Context);

  const [file, setFile] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch({ type: 'UPDATE_START' });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      updatedUser.profilePic = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updatedUser);
      dispatch({ type: 'UPDATE_SUCCESS', payload: res.data });
    } catch (err) {
      dispatch({ typpe: 'UPDATE_FAILURE' });
      console.log(err);
    }
  };

  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm' onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src={file ? URL.createObjectURL(file) : PF + user?.profilePic}
              alt=''
            />

            <label htmlFor='fileInput'>
              <i className='settingsPPIcon fa-regular fa-circle-user'></i>
            </label>
            <input
              type='file'
              id='fileInput'
              style={{ display: 'none' }}
              onChange={e => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type='text'
            placeholder={user.username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type='email'
            placeholder={user.email}
            onChange={e => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input type='password' onChange={e => setPassword(e.target.value)} />
          <button className='settingsSubmit' type='submit'>
            Update
          </button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};

export default Settings;

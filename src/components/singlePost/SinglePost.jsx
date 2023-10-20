import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PostImg from '../../assets/blog-img/blog-1.jpeg';
import { Context } from '../../context/Context';
import './SinglePost.css';

const SinglePost = () => {
  const PF = 'http://localhost:8800/images/';

  const { user } = useContext(Context);
  const location = useLocation();
  const path = location.pathname.split('/').at(-1);
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState(post.desc);
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${path}`, {
        data: { username: user.username },
      });
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${path}`, {
        username: user.username,
        title,
        desc,
      });
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo ? (
          <img src={PF + post.photo} alt='' className='singlePostImg' />
        ) : (
          <img src={PostImg} alt='' className='singlePostImg' />
        )}
        {updateMode ? (
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='singlePostTitleInput'
            autoFocus
          />
        ) : (
          <h1 className='singlePostTitle'>
            {post.title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon fa-regular fa-pen-to-square'
                  onClick={() => setUpdateMode(true)}></i>
                <i
                  className='singlePostIcon fa-solid fa-trash-can'
                  onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}

        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author:{' '}
            <Link className='link' to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <>
            <textarea
              className='singlePostDescInput'
              value={desc}
              onChange={e => setDesc(e.target.value)}
            />
            <button className='singlePostButton' onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <p className='singlePostDesc'>{post.desc}</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;

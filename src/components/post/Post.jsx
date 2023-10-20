import { Link } from 'react-router-dom';
import PostImg from '../../assets/blog-img/blog-1.jpeg';
import './Post.css';

const Post = ({ post }) => {
  const PF = 'http://localhost:8800/images/';
  return (
    <div className='post'>
      {post.photo ? (
        <img src={PF + post.photo} alt='' className='postImg' />
      ) : (
        <img src={PostImg} alt='' className='postImg' />
      )}
      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map(c => (
            <Link key={c} className='link' to={`/?cat=${c}`}>
              <span className='postCat'>{c}</span>
            </Link>
          ))}
        </div>
        <Link className='link' to={`/post/${post._id}`}>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='postDesc'>{post.desc}</p>
    </div>
  );
};

export default Post;

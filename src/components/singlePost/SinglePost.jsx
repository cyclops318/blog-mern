import PostImg from '../../assets/blog-img/blog-1.jpeg';
import './SinglePost.css';

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img src={PostImg} alt='mountain' className='singlePostImg' />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i class='singlePostIcon fa-regular fa-pen-to-square'></i>
            <i class='singlePostIcon fa-solid fa-trash-can'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Safak</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam obcaecati
          sequi, id vel veritatis molestias tempore quae quibusdam adipisci
          eveniet ullam numquam voluptate nobis aspernatur nulla aliquam, alias
          exercitationem et? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Doloribus tenetur enim omnis culpa sapiente. Ducimus corporis
          autem fugiat illo architecto, itaque nemo perspiciatis sunt voluptatem
          voluptatibus asperiores dolore eaque officia! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eaque, esse temporibus! Omnis iure
          dicta laudantium distinctio libero, neque deserunt veritatis sequi
          eaque sapiente repudiandae, odio aspernatur ut cum repellat quaerat!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;

import PostImg from '../../assets/blog-img/blog-1.jpeg';
import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      <img src={PostImg} alt='' className='postImg' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit amet</span>
        {/* <hr /> */}
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio,
        cumque nisi animi nulla fugit nam porro ea! Sit quasi, animi neque iusto
        magni asperiores culpa vel ex quidem sint velit! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Expedita culpa totam assumenda error
        cum reiciendis rem odio eos incidunt id. Itaque illo alias impedit est,
        odio aliquid beatae ipsa earum. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Facilis, maxime at reiciendis aliquam provident
        distinctio culpa perferendis harum modi asperiores ducimus officia
        libero iste sed perspiciatis qui dolore molestias. Aperiam? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Atque, sequi. Iure aliquid
        ipsum corporis explicabo ut natus consequuntur, esse sapiente, cumque
        perferendis illum corrupti perspiciatis voluptates dolorem consequatur
        eius eum!
      </p>
    </div>
  );
};

export default Post;

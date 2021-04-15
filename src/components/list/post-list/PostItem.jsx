import PropTypes from 'prop-types';

function PostItem({ post }) {
  return (
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      <br />
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
};
export default PostItem;

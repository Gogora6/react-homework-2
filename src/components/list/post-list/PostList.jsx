import { useContext } from 'react';
import { PostProvider } from '../../../providers/PostProvider';
import PostItem from './PostItem';

function PostList(props) {
  const { PostData } = useContext(PostProvider);
  return (
    <div className="card">
      {PostData.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;

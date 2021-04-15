import React, { useEffect, useState } from 'react';
import API_SERVICE from '../services/api';

export const PostProvider = React.createContext(null);

function PostProviderComponent({ children }) {
  const [PostData, setPostData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await API_SERVICE.GetPostData({});
      setPostData(response);
    })();
  }, []);

  const providerValue = {
    PostData,
  };

  return (
    <PostProvider.Provider value={providerValue}>
      {children}
    </PostProvider.Provider>
  );
}

export default PostProviderComponent;

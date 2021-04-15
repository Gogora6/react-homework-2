import { useState } from 'react';
import UserProviderComponent from './providers/UserProvider';
import UserPage from './pages/user';
import Nav from './components/nav';
import './App.css';
import PostProviderComponent from './providers/PostProvider';
import PostPage from './pages/posts';

function App() {
  const [page, setPage] = useState({
    _userPage: true,
    _postPage: false,
  });

  const [activePage, setActivePage] = useState('_userPage');

  const onPageChange = (pageKey) => {
    const updatePages = { ...page };
    let newActivePage = activePage;
    Object.keys(page).forEach((key) => {
      if (key === pageKey) {
        updatePages[pageKey] = true;
        newActivePage = pageKey;
      } else {
        updatePages[key] = false;
      }
    });

    setActivePage(newActivePage);
    setPage(updatePages);
  };
  return (
    <div className="container">
      <Nav SetPage={onPageChange} pages={page} />
      {page._userPage && (
        <UserProviderComponent>
          <UserPage />
        </UserProviderComponent>
      )}

      {page._postPage && (
        <PostProviderComponent>
          <PostPage />
        </PostProviderComponent>
      )}
    </div>
  );
}

export default App;

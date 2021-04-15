import { useState } from 'react';
import UserPage from './pages/user';
import UserProvider from './providers/UserProvider';
import './App.css';

function App() {
  const [page, SetPage] = useState({
    userPage_nav: true,
    postPage_nav: false,
  });
  return (
    <div className="container">
      {page &&
      (
        <UserProvider>
          <UserPage />
        </UserProvider>
      )}
    </div>
  );
}

export default App;

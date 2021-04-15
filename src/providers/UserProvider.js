import React, { useEffect, useState } from 'react';
import API_SERVICE from '../servicies/api';

export const UserProvider = React.createContext(null);

function TodoProviderComponent({ children }) {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await API_SERVICE.getUserData({});
      setUserData(response);
    })();
  }, []);

  const providerValue = {
    userData,
  };

  return (
    <UserProvider.Provider value={providerValue}>
      {children}
    </UserProvider.Provider>
  );
}

export default TodoProviderComponent;

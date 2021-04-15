import { useContext } from 'react';
import { UserProvider } from '../../../providers/UserProvider';
import UserDetails from './UserDetails';

function UserList(props) {
  const { userData } = useContext(UserProvider);
  return (
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">City</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return <UserDetails user={user} key={user.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

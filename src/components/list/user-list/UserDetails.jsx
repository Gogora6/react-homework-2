import PropTypes from 'prop-types';

function UserDetails({ user }) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address.city}</td>
    </tr>
  );
}
UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserDetails;

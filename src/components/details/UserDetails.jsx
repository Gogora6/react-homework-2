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

export default UserDetails;

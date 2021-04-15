import PropTypes from 'prop-types';

const Nav = ({ SetPage, pages }) => {
  console.log(pages);
  return (
    <header className="row">
      <nav className="mt-3">
        <ul className="nav nav-pills flex-column flex-sm-row">
          <li className="nav-item">
            <button
              className={`nav-link ${pages._userPage ? 'active' : ''}`}
              onClick={() => SetPage('_userPage')}>
              User Page
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${pages._postPage ? 'active' : ''}`}
              onClick={() => SetPage('_postPage')}>
              Post Page
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Nav.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  pages: PropTypes.object.isRequired,
};

export default Nav;

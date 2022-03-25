import './sidebar.scss';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import menuSidebar from '../../../constant/menu-sidebar';

export default function Sidebar(props) {
  const history = useHistory();
  const pathname = history.location.pathname;
  const menu = menuSidebar

  return (
    <Nav className="col-md-12 d-md-block bg-sidebar sidebar p-2">
      {menu.map((menuSidebar, index) => (
        <Nav.Item key={index}>
          <Link
            className={`nav-link ${
              pathname.indexOf(menuSidebar.pageName) !== -1 ? 'active' : ''
            }`}
            to={`${menuSidebar.path}`}>
            <div className="d-flex">
              <h4>{menuSidebar.icon}</h4>
              <span className="d-none d-md-block p-1">{menuSidebar.title}</span>
            </div>
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );
}

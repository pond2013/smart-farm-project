import { Link } from 'react-router-dom';
import './landing.scss';

function Landing(props) {
  const { menuItem } = props;

  return (
    <Link
      className="col-sm-6 col-md-4 text-decoration-none"
      to={menuItem.path}
      onClick={() => {
        localStorage.setItem('source', menuItem.value)
        console.log(menuItem.path);
      }
      }>
      <div className="form-group">
        <div className="d-flex align-items-center menu-box">
          <div className="icon-block">
            <i className={menuItem.icon}></i>
          </div>
          <div className="text-block">
            <span>{menuItem.title}</span>
            <br />
            <span className="other-que">{menuItem.desc}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Landing;
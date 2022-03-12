import './header.scss';
import logo from '../../../assets/img/logo.png';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Image } from 'react-bootstrap';
import menu from '../../../constant/menu';

export default function Header() {
  const location = useLocation();
  const [title, setTitle] = useState();

  useEffect(() => {
    const rootPath = location.pathname.split('/', 2).filter(path => !!path).shift();
    const getMenu = menu?.find((m) => m.isShow && m.path.includes(rootPath));
    setTitle(getMenu?.title);
  }, [location]);
  return (
    <Navbar>
      <Navbar.Brand href="/home">
        <Image roundedCircle src={logo}></Image>
      </Navbar.Brand>
      <span className="d-flex align-items-center font-weight-bold">{title || 'Big Boss Smart Farm'}</span>
    </Navbar>
  );
}

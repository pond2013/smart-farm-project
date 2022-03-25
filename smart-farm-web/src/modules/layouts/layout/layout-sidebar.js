import { Container, Row, Col } from "react-bootstrap";
import Content from "../content/content";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import menuSidebar from "../../../constant/menu-sidebar";

export default function SidebarLayout() {
  const isLogin = window.location.pathname === "/login";
  const defaultTitle = "Big Boss Smart Farm";
  const menu = menuSidebar;
  const title = menu ? menu.title : defaultTitle;

  return (
    <>
      {console.log(window.location.pathname)}
      {isLogin ? (
        <Content />
      ) : (
        <>
          <Header />
          <Container fluid>
            <Row>
              <Col xs={2}>
                <Sidebar />
              </Col>
              <Col xs={10}>
                <Content />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

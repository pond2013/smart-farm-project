import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../content/content";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import menuSidebar from "../../../constant/menu-sidebar";
import { withRouter } from "react-router-dom";

function SidebarLayout() {
  const [isLogin, setIsLogin] = useState(
    window.location.pathname === "/login" ||
      window.location.pathname === "/register"
  );
  const defaultTitle = "Big Boss Smart Farm";
  const menu = menuSidebar;
  const title = menu ? menu.title : defaultTitle;

  return (
    <>
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

export default withRouter(SidebarLayout);

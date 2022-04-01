import React from 'react'
import './main.scss'
import { Row, Col, Container } from 'react-bootstrap'

function Main() {
  function switchChecked() {}
  return (
    <>
      <div class="bg">
        <Container className="d-flex flex-column justify-content-md-center">
          <div className="m-5 d-flex justify-content-around card-top">
            <div className="m-4 p-2 col-example text-left card-relay"></div>

            <div className="m-4 p-2 col-example text-left card-relay"></div>

            <div className="m-4 p-2 col-example text-left card-relay"></div>

            <div className="m-4 p-2 col-example text-left card-relay"></div>
          </div>
          <div></div>

          <div className="ms-5 d-flex flex-column justify-content-around card-buttom">
            <div className="mt-2 text-switch">
              <label id="auto">Mode</label>
              <label class="switch">
                <input
                  type="checkbox"
                  className="slider"
                  onChange={switchChecked()}
                ></input>
                <span className="slider"></span>
              </label>
              <label id="manual">Manual</label>
            </div>

            <div className="d-flex justify-content-around">
              <div className="m-4 p-2 col-example text-left card-relay-buttom"></div>

              <div className="m-4 p-2 col-example text-left card-relay-buttom"></div>

              <div className="m-4 p-2 col-example text-left card-relay-buttom"></div>

              <div className="m-4 p-2 col-example text-left card-relay-buttom"></div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Main

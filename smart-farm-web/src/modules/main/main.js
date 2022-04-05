import React from 'react'
import './main.scss'
import temp from '../../assets/img/kkm.png'
import soihumid from '../../assets/img/13.png'
import humid from '../../assets/img/15.jpg'
import wind from '../../assets/img/13.jpg'
import { Row, Col, Container } from 'react-bootstrap'

function Main() {
  function switchChecked() {}
  return (
    <>
      <div class="bg">
        <Container className="d-flex flex-column justify-content-md-center">
          <div className="m-5 d-flex justify-content-around card-top">
            <div className="m-4 p-2 col-example card-relay">
              <Row>
                <div>
                  <img className="img-logofarm" src={temp} />
                </div>
              </Row>
              <Row className='m-2'>
                <p>0 ℃</p>
              </Row>
              <Row>
                <p>อุณหภูมิ</p>
              </Row>
            </div>

            <div className="m-4 p-2 col-example text-left card-relay">
              <Row>
                <div>
                  <img className="img-logofarm" src={soihumid} />
                </div>
              </Row>
              <Row className='m-2'>
                <p>0 %</p>
              </Row>
              <Row>
                <p>ความชื้นดิน</p>
              </Row>
            </div>

            <div className="m-4 p-2 col-example text-left card-relay">
              <Row>
                <div>
                  <img className="img-logofarm" src={humid} />
                </div>
              </Row>
              <Row className='m-2'>
                <p>0 %</p>
              </Row>
              <Row>
                <p>ความชื้น</p>
              </Row>
            </div>

            <div className="m-4 p-2 col-example text-left card-relay">
              <Row>
                <div>
                  <img className="img-logofarm" src={wind} />
                </div>
              </Row>
              <Row className='m-2'>
                <p>0 m/s</p>
              </Row>
              <Row>
                <p>ความเร็วลม</p>
              </Row>
            </div>
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

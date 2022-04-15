import React, { useEffect, useState } from 'react'
import './main.scss'
import temp from '../../assets/img/temp-icon.png'
import humid from '../../assets/img/humid-icon.png'
import wind from '../../assets/img/wind-icon.png'
import off from '../../assets/img/OFF.png'
import on from '../../assets/img/ON.png'
import { Row, Col, Container } from 'react-bootstrap'

function Main() {
  useEffect(() => {
    setInitImg()
  }, [])

  const [checked, setChecked] = useState(false)
  let list = [
    { id: '1', state: 'on' },
    { id: '2', state: 'off' },
    { id: '3', state: 'on' },
    { id: '4', state: 'off' },
  ]

  function setInitImg() {
    for (let item of list) {
      if (item.state == 'on') {
        document.getElementById(`switch${item.id}`).setAttribute('src', on)
        document.getElementById(`switch${item.id}`).setAttribute('alt', 'on')
      } else {
        document.getElementById(`switch${item.id}`).setAttribute('src', off)
        document.getElementById(`switch${item.id}`).setAttribute('alt', 'off')
      }
      console.log(item)
    }
  }

  function Changeimg(e) {
    e.preventDefault()
    if (checked == true) {
      if (e.target.alt == 'off') {
        e.target.setAttribute('src', on)
        e.target.setAttribute('alt', 'on')
      } else if (e.target.alt == 'on') {
        e.target.setAttribute('src', off)
        e.target.setAttribute('alt', 'off')
      }
    }
  }

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
              <Row className="m-2 mt-4">
                <p>24 ℃</p>
              </Row>
              <Row>
                <p>อุณหภูมิ</p>
              </Row>
            </div>

            <div className="m-4 p-2 col-example text-left card-relay">
              <Row>
                <div>
                  <img className="img-logofarm" src={humid} />
                </div>
              </Row>
              <Row className="m-2 mt-4">
                <p>100 %</p>
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
              <Row className="m-2 mt-4">
                <p>100 %</p>
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
              <Row className="m-2 mt-4">
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
              <label className="switch">
                <input
                  type="checkbox"
                  id="slider1"
                  defaultChecked={checked}
                  onChange={() => setChecked(!checked)}
                ></input>
                <span className="slider"></span>
              </label>
              <label id="manual">Manual</label>
            </div>

            <div className="d-flex justify-content-around">
              <div className="m-4 p-2 col-example text-left card-relay-buttom">
                <Row>
                  <p>รีเลย์ 1</p>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-logoswitch"
                      id="switch1"
                      onClick={Changeimg}
                    />
                  </div>
                </Row>
              </div>

              <div className="m-4 p-2 col-example text-left card-relay-buttom">
                <Row>
                  <p>รีเลย์ 2</p>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-logoswitch"
                      id="switch2"
                      onClick={Changeimg}
                    />
                  </div>
                </Row>
              </div>

              <div className="m-4 p-2 col-example text-left card-relay-buttom">
                <Row>
                  <p>รีเลย์ 3</p>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-logoswitch"
                      id="switch3"
                      onClick={Changeimg}
                    />
                  </div>
                </Row>
              </div>

              <div className="m-4 p-2 col-example text-left card-relay-buttom">
                <Row>
                  <p>รีเลย์ 4</p>
                  <div className="d-flex justify-content-center">
                    <img
                      className="img-logoswitch"
                      id="switch4"
                      onClick={Changeimg}
                    />
                  </div>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Main

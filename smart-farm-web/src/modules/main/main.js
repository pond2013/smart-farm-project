import React, { useEffect, useRef, useState } from 'react'
import './main.scss'
import temp from '../../assets/img/temp-icon.png'
import humid from '../../assets/img/humid-icon.png'
import wind from '../../assets/img/wind-icon.png'
import off from '../../assets/img/OFF.png'
import on from '../../assets/img/ON.png'
import { Row, Container } from 'react-bootstrap'

function Main() {
  useEffect(() => {
    getDataRelay()
    getTempData()
    getAirData()
    getSoilData()
    getWindData()
  }, [])

  var thisJson
  const [checked, setChecked] = useState(false);
  const username = localStorage.getItem('username');
  const [tempval, setTemp] = useState();
  const [humidval, setHumid] = useState();
  const [soilval, setSoil] = useState();
  const [windval, setWind] = useState();

  const getTempData = () => {
    fetch('http://localhost:8080/api/Sample/giverandomnumber?start=20&end=42')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
          setTemp(responseJSON)
      })
  }
  const getAirData = () => {
    fetch('http://localhost:8080/api/Sample/giverandomnumber?start=30&end=80')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
          setHumid(responseJSON)
      })
  }
  const getSoilData = () => {
    fetch('http://localhost:8080/api/Sample/giverandomnumber?start=10&end=70')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
          setSoil(responseJSON)
      })
  }
  const getWindData = () => {
    fetch('http://localhost:8080/api/Sample/giverandomnumber?start=1&end=9')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
          setWind(responseJSON)
      })
  }

  const getDataRelay = () =>{
    fetch('http://localhost:8080/api/Relay')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
        for (let item in responseJSON) {
          if (responseJSON[item].turnOn == true) {
            document.getElementById(`${responseJSON[item].relayId}`).setAttribute('src', on)
            document.getElementById(`${responseJSON[item].relayId}`).setAttribute('alt', 'on')
          } else {
            document.getElementById(`${responseJSON[item].relayId}`).setAttribute('src', off)
            document.getElementById(`${responseJSON[item].relayId}`).setAttribute('alt', 'off')
          }
        }
      })
  }
  const postUser = (event) => {
    (async () => { 
      let turnOn = event.alt == "on" ? true : false
      console.log(turnOn)
        const rawResponse = await fetch('http://localhost:8080/api/Relay', {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              id:"",
              relayId: event.id,
              turnOn: turnOn,
            })
        });
        
      })();
    }

  function Changeimg(e) {
    e.preventDefault() 
    if (checked == true) {
      if (e.target.alt == 'off') {
        e.target.setAttribute('src', on)
        e.target.setAttribute('alt', 'on')
        postUser(e.target)
      } else if (e.target.alt == 'on') {
        e.target.setAttribute('src', off)
        e.target.setAttribute('alt', 'off')
        postUser(e.target)
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
                <p>{tempval} ℃</p>
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
                <p>{humidval} %</p>
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
                <p>{soilval} %</p>
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
                <p>{windval} m/s</p>
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
                      id="1"
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
                      id="2"
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
                      id="3"
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
                      id="4"
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

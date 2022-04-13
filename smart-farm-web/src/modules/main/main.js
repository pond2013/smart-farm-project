import React , {useRef} from 'react'
import ReactDOM from 'react-dom';
import './main.scss'
import temp from '../../assets/img/kkm.png'
import soihumid from '../../assets/img/13.png'
import humid from '../../assets/img/15.jpg'
import wind from '../../assets/img/13.jpg'
import { Row, Col, Container } from 'react-bootstrap'

function Main() {
  const tempInput = useRef(null);
  
  const getTemp = () => {

  tempInput.current.innerText = "105 ํc";
  fetch("http://localhost:8080/WeatherForecast").then((response) => console.log(response))
  fetch("http://localhost:8080/WeatherForecast")
    .then((response) => response.json())
    .then((responseJSON) => {
       // do stuff with responseJSON here...
       console.log(responseJSON);
    });
  // fetch("http://localhost:8080/WeatherForecast", {
  //   method: 'GET',
  //   headers: {
  //      'Content-Type': 'application/json',
  //      'Access-Control-Allow-Origin': '*',
  //      'Access-Control-Allow-Methods': 'GET, POST',
  //      'Access-Control-Allow-Headers': 'Content-Type',
  //   },
  // })
  // .then(response => response.text())
  // .then(result => console.log(result))
  // .catch(error => console.log('error', error));
  
  //fetch("http://localhost:8080/WeatherForecast").then((response) => console.log(response))
  // fetch(":8080/WeatherForecast" , {
  //   headers : { 
  //     'Content-Type': 'application/json',
  //     'Accept': 'application/json'
  //    }
  // }).then(response => response.json()).then(
  //   result => console.log(result)
  //   ).catch(console.log)
  // };
  
  }
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
                <p ref={tempInput}>24 ℃</p>
                <button onClick={getTemp}>Click me</button>
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
              <Row className='m-2'>
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
              <div className="m-4 p-2 col-example text-left card-relay-buttom">
                <Row>
                  <p>รีเลย์ 1</p>
                </Row>
              </div>

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

import React from 'react'
import './addhumid.scss'
import bg from '../../../assets/img/4.jpg'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function addHumid() {
  let history = new useHistory()
  function saveClickk() {
    history.push('../Humid')
  }

  return (
    <>
      <div
        className="bg-addhumid"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าความชื้น
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addsoil m-5 p-5">
              <Row className="m-2 p-2">
                <Row className='p-1'>
                  <p>เริ่มทำงาน</p>
                  <input type="time"></input>
                </Row>
                <Row className="p-1">
                  <p>ความชื้น</p>
                  <input type="number" placeholder="0-100% RH"></input>
                </Row>
                <Row className="p-1">
                  <p>ทำงาน (นาที)</p>
                  <input type="number" placeholder="0"></input>
                </Row>
              </Row>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="บันทึก"
              onClick={saveClickk}
              id="saveaddhumid"
            ></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default addHumid

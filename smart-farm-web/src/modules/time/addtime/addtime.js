import React from 'react'
import './addtime.scss'
import bg from '../../../assets/img/15.jpg'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function addTime() {
  let history = new useHistory()
  function saveClickk() {
    history.push('../time')
  }

  return (
    <>
      <div
        className="bg-addtime"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าเวลา
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addtime m-5 p-5">
              <Row className="m-2 p-2">
                <Row className="p-1">
                  <p>วัน</p>
                  <input type="date"></input>
                </Row>
                <Row className="p-1">
                  <p>เริ่มทำงาน</p>
                  <input type="time"></input>
                </Row>
                <Row className="p-1">
                  <p>ทำงาน (นาที)</p>
                  <input type="number" placeholder="0"></input>
                </Row>
                <Row className="p-1">
                  <p>รีเลย์</p>
                  <Col>
                  <input type="checkbox" id="relay1" name="relay1"></input>
                  <label for="relay1">รีเลย์ 1</label>
                  </Col>
                  <Col>
                  <input type="checkbox" id="relay2" name="relay2"></input>
                  <label for="relay2">รีเลย์ 2</label>
                  </Col>
                  <Col>
                  <input type="checkbox" id="relay3" name="relay3"></input>
                  <label for="relay3">รีเลย์ 3</label>
                  </Col>
                  <Col>
                  <input type="checkbox" id="relay4" name="relay4"></input>
                  <label for="relay4">รีเลย์ 4</label>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="บันทึก"
              onClick={saveClickk}
              id="savebutton"
            ></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default addTime

import React from 'react'
import './addtemp.scss'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function addTemp() {
  let history = new useHistory()
  function saveClickk() {
    history.push('../temp')
  }

  return (
    <>
      <div className="bg-addtemp">
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าอุณหภูมิ
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addtemp m-5 p-5">
              <Row className="m-2 p-2">
                <Row className="p-1">
                  <p>อุณหภูมิ (℃)</p>
                  <input type="number" placeholder="0"></input>
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
              id="savebutton"
            ></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default addTemp

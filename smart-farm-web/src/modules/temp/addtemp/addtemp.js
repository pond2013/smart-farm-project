import React from 'react'
import './addtemp.scss'
import bg from '../../../assets/img/100.jpg'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function addTemp() {
  let history = new useHistory()
  function saveClickk() {
    history.push('../temp')
  }

  return (
    <>
      <div
        className="bg-addtemp"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าอุณหภูมิ
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addtemp m-5 p-5">
              <Row className="m-2 p-2">
                <Row className='p-1'>
                  <p>อุณหภูมิ (℃)</p>
                  <input type="number"></input>
                </Row>
                <Row className='p-1'>
                  <p>ทำงาน (นาที)</p>
                  <input type="number"></input>
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

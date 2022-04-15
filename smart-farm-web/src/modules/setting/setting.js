import React from 'react'
import './setting.scss'
import { useHistory } from 'react-router-dom'
import { Row, Container } from 'react-bootstrap'

function Setting() {
  return (
    <>
      <div
        className="bg-setting"
      >
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center">ตั้งค่าระบบ</h2>
          <div className="d-flex justify-content-center">
            <div className="card-setting m-2 p-2 ">
              <Row className='p-1 '>
                <p>ชนิดของพืข</p>
                <input type="text" placeholder="กรุณากรอกชนิดของพืช"></input>
              </Row>
              <Row className='p-1'>
                <p>หมายเลขบอร์ด</p>
                <input type="number" placeholder="192.168.1.105"></input>
              </Row>
            </div>
          </div>

          <div className="d-flex justify-content-center m-5">
            <input type="submit" value="บันทึก" id="savebutton" ></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default Setting

import React from 'react'
import './setting.scss'
import bg from '../../assets/img/14.jpg'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function Setting() {
  

  return (
    <>
      <div
        className="bg-temp"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
          <Container>
                <h2>ตั้งค่าระบบ</h2>
                <p>ชนิดของพืข</p>
                <input type={Text} ></input>
                <p>หมายเลขบอร์ด</p>
                <input type={Number} ></input>
                <input type="submit" value="Save"></input>

          </Container>
      </div>
    </>
  )
}
export default Setting

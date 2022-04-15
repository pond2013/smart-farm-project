import React from 'react'
import './profile-setting.scss'
import bg from '../../assets/img/15.jpg'
import icon from '../../assets/img/modified-icon.png'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function ProfileSetting() {
  let history = new useHistory()

  return (
    <>
      <div
        className="bg-profile-setting"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container className="m-5 p-5">
          <h2>การตั้งค่าบัญชี</h2>
          <div className='m-5 profile-setting'>
            <Row className='p-2'>
              <Col className='m-2'>
                <p>ชื่อผู้ใช้</p>
              </Col>
              <Col xs={7}>
                <input type="text"></input>
              </Col>
              <Col className='m-2'>
                <a href="">
                  <img className="modified-icon" src={icon}></img>
                  แก้ไข
                </a>
              </Col>
            </Row>
            <Row className='m-1'>
              <Col className='m-2'>
                <p>E-mail</p>
              </Col>
              <Col xs={7}>
                <input type="email"></input>
              </Col>
              <Col className='m-2'>
                <a href="">
                  <img className="modified-icon" src={icon}></img>
                  แก้ไข
                </a>
              </Col>
            </Row>
            <Row className='m-1'>
              <Col className='m-2'>
                <p>Password</p>
              </Col>
              <Col xs={7}>
                <input type="password"></input>
              </Col>
              <Col className='m-2'>
                <a href="">
                  <img className="modified-icon" src={icon}></img>
                  แก้ไข
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  )
}
export default ProfileSetting

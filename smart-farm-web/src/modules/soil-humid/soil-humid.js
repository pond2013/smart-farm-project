import React from 'react'
import './soil-humid.scss'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function SoilHumid() {
  let history = new useHistory()
  function AddClick() {
    history.push('/addsoilHumid')
  }
  return (
    <>
      <div className="bg-temp">
        <Container className="m-4 ms-4 p-4">
          <Row className="m-1">
            <Col sm={11}>
              <h2 className="ms-5 text-setting">ตั้งค่าความชื้นดิน</h2>
            </Col>
            <Col sm={1}>
              <input
                type="submit"
                value="ADD"
                onClick={AddClick}
                id="add-soilhumid"
              ></input>
            </Col>
          </Row>

          <Row>
            <Table responsive="sm">
              <thead className="head-soilhumdi">
                <tr>
                  <th>เริ่มทำงาน</th>
                  <th>ความชื้น(%RH)</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="cases-soilhumid">
                <tr>
                  <td>08:30 AM</td>
                  <td>40 %RH</td>
                  <td>12</td>
                  <td>1</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>09:90 AM</td>
                  <td>601 %RH</td>
                  <td>1020</td>
                  <td>911</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>07:80 AM</td>
                  <td>41 %RH</td>
                  <td>1</td>
                  <td>100</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default SoilHumid

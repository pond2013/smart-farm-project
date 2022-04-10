import React from 'react'
import './humid.scss'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function Humid() {
  let history = new useHistory()
  function AddClick() {
    history.push('/addhumid')
  }
  return (
    <>
      <div className="bg-temp">
        <Container className="m-4 ms-4 p-4">
          <Row className="m-1">
            <Col sm={11}>
              <h2 className="ms-5 text-setting">ตั้งค่าความชื้น</h2>
            </Col>
            <Col sm={1}>
              <input
                type="submit"
                value="ADD"
                onClick={AddClick}
                id="add-humid"
              ></input>
            </Col>
          </Row>

          <Row>
            <Table responsive="sm">
              <thead className="head-humdi">
                <tr>
                  <th>เริ่มทำงาน</th>
                  <th>ความชื้น(%RH)</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="cases-humid">
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
                  <td>09:30 AM</td>
                  <td>50 %RH</td>
                  <td>120</td>
                  <td>11</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>07:30 AM</td>
                  <td>4 %RH</td>
                  <td>129</td>
                  <td>10</td>
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

export default Humid

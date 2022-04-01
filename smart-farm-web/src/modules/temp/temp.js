import React from 'react'
import './temp.scss'
import bg from '../../assets/img/99.jpg'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function Temp() {
  let history = new useHistory();
  function AddClick() {
    history.push('../addtemp')
  }

  return (
    <>
      <div
        className="bg-temp"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container className='m-5 p-5'>
          <Row>
            <Col>
              <h2 className="text-setting">ตั้งค่าอุณหภูมิ</h2>
            </Col>
            <Col>
              <input
                type="submit"
                value="ADD"
                onClick={AddClick}
                id="add-temp"
              ></input>
            </Col>
          </Row>

          <Row className="card-temp">
            <Table responsive="sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>อุณหภูมิ (C)</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>25 C</td>
                  <td>40</td>
                  <td>1</td>
                  <td>ลบ</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Temp

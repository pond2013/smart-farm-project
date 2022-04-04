import React from 'react'
import './temp.scss'
import Table from 'react-bootstrap/Table'
import { useHistory} from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'
import {useEffect} from 'react'

function Temp() {
  let history = new useHistory();
  function AddClick() {
    history.push('/addtemp')
  }

  return (
    <>
      <div
        className="bg-temp"
        
      >
        <Container className='m-5 ms-5 p-5 card-temp'>
          <Row className='m-1'>
            <Col sm={11}>
              <h2 className="ms-5 text-setting">ตั้งค่าอุณหภูมิ</h2>
            </Col>
            <Col sm={1}>
              <input
                type="submit"
                value="ADD"
                onClick={AddClick}
                id="add-temp"
              ></input>
            </Col>
          </Row>

          <Row>
            <Table responsive="sm">
              <thead className='head-table'>
                <tr>
                  <th>อุณหภูมิ (℃)</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="cases">
                <tr>
                  <td>25 ℃</td>
                  <td>40</td>
                  <td>1</td>
                  <td>
                    <a href=''>ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>28 ℃</td>
                  <td>20</td>
                  <td>3</td>
                  <td>
                    <a href=''>ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>23 ℃</td>
                  <td>50</td>
                  <td>5</td>
                  <td>
                    <a href=''>ลบ</a>
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
export default Temp

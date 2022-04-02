import React from 'react'
import './time.scss'
import bg from '../../assets/img/8.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useHistory} from 'react-router-dom'

function Time() {
  let history = new useHistory();
  function AddClick() {
    history.push('/addtime')
  }

  return (
    <>
      <div
        className="bg-time"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
       <Container className='m-5 ms-5 p-5 card-time'>
          <Row className='m-1'>
            <Col sm={11}>
              <h2 className="ms-5 text-setting">ตั้งค่าเวลา</h2>
            </Col>
            <Col sm={1}>
              <input
                type="submit"
                value="ADD"
                onClick={AddClick}
                id="add-time"
              ></input>
            </Col>
          </Row>

          <Row>
            <Table responsive="sm">
              <thead className='head-table'>
                <tr>
                  <th>วัน/เดือน/ปี</th>
                  <th>เวลาในการเริ่มทำงาน</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="cases">
                <tr>
                  <td>25-2-2565</td>
                  <td>8:30 AM</td>
                  <td>40</td>
                  <td>1</td>
                  <td>
                    <a href=''>ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>25-2-2567</td>
                  <td>8:32 AM</td>
                  <td>50</td>
                  <td>2</td>
                  <td>
                    <a href=''>ลบ</a>
                  </td>
                </tr>
                <tr>
                <td>25-2-2568</td>
                  <td>8:66 AM</td>
                  <td>90</td>
                  <td>6</td>
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
export default Time

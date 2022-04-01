import React from 'react'
import './time.scss'
import bg from '../../assets/img/8.jpg'
import Table from 'react-bootstrap/Table'

function Time() {
  return (
    <>
      <div
        className="bg-time"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <h2>ตั้งค่าเวลา</h2>
        <div>
        <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>วัน/เดือน/ปี</th>
                <th>เวลาในการเริ่มทำงาน</th>
                <th>ทำงาน(นาที)</th>
                <th>รีเลย์</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>25-02-2565</td>
                <td>8:30 AM</td>
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
        </div>
      </div>
    </>
  )
}
export default Time

import React, { useState } from 'react'
import './addtime.scss'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function AddTime() {
  let history = new useHistory()
  const [date, setDate] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const [work, setWork] = useState('')
  const [relay, setRelay] = useState([])
  const username = localStorage.getItem('username')

  const postUser = () => {
    ;(async () => {
      for(let i in relay){
      const rawResponse = await fetch(
        'http://localhost:8080/api/SetTime/ByList',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(          
            [
            {
              id: '',
              ddmmyy: date,
              timeToStart: timeStart,
              duration: work,
              relayId: relay[i],
              user: username
            },     
            ]
            ),
        },
      )
    }})()
  }

  function saveClickk(e) {
    e.preventDefault()
    postUser()
    console.log(date)
    console.log(timeStart)
    console.log(work)
    console.log(relay)

    // history.push('../time')
  }

  return (
    <>
      <div className="bg-addtime">
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าเวลา
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addtime m-5 p-5">
              <Row className="m-2 p-2">
                <Row className="p-1">
                  <p>วัน</p>
                  <input
                    type="date"
                    id="date"
                    onChange={(e) => {
                      setDate(e.target.value)
                    }}
                  ></input>
                </Row>
                <Row className="p-1">
                  <p>เริ่มทำงาน</p>
                  <input
                    type="time"
                    id="timeStart"
                    onChange={(e) => {
                      setTimeStart(e.target.value)
                    }}
                  ></input>
                </Row>
                <Row className="p-1">
                  <p>ทำงาน (นาที)</p>
                  <input
                    type="number"
                    id="work"
                    placeholder="0"
                    onChange={(e) => {
                      setWork(e.target.value)
                    }}
                  ></input>
                </Row>
                <Row className="p-1">
                  <p>รีเลย์</p>
                  <Col>
                    <input
                      className="relay-checkbox"
                      type="checkbox"
                      id="relay1"
                      name="relay1"
                      onChange={(e) => {
                        setRelay((list) => [...list, '1'])
                      }}
                    ></input>
                    <label for="relay1">รีเลย์ 1</label>
                  </Col>
                  <Col>
                    <input
                      className="relay-checkbox"
                      type="checkbox"
                      id="relay2"
                      name="relay2"
                      onChange={(e) => {
                        setRelay((list) => [...list, '2'])
                      }}
                    ></input>
                    <label for="relay2">รีเลย์ 2</label>
                  </Col>
                  <Col>
                    <input
                      className="relay-checkbox"
                      type="checkbox"
                      id="relay3"
                      name="relay3"
                      onChange={(e) => {
                        setRelay((list) => [...list, '3'])
                      }}
                    ></input>
                    <label for="relay3">รีเลย์ 3</label>
                  </Col>
                  <Col>
                    <input
                      className="relay-checkbox"
                      type="checkbox"
                      id="relay4"
                      name="relay4"
                      onChange={(e) => {
                        setRelay((list) => [...list, '4'])
                      }}
                    ></input>
                    <label for="relay4">รีเลย์ 4</label>
                  </Col>
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
export default AddTime

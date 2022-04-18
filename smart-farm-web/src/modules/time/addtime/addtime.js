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
  const [isChecked, setIsChecked] = useState(true)
  const username = localStorage.getItem('username')

  const postUser = () => {
    ;(async () => {
      for (let item in relay) {
        const rawResponse = await fetch(
          'http://localhost:8080/api/SetTime/ByList',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([
              {
                id: '',
                ddmmyy: date,
                timeToStart: timeStart,
                duration: work,
                relayId: relay[item],
                user: username,
              },
            ]),
          },
        )
      }
    })()
  }

  function saveClickk(e) {
    e.preventDefault()
    if (date != '' && timeStart != '' && work != '' && relay.length != 0) {
      postUser()
      console.log(relay)
      //history.push('../time')
    } else {
      alert('Invalid or Incomplete')
    }
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
                        if (e.target.checked == true) {
                          setRelay((list) => [...list, '1'])
                        } else {
                          relay.splice(relay.indexOf('1', 1))
                        }
                      }}
                      onClick={() => setIsChecked(!isChecked)}
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
                        if (e.target.checked == true) {
                          setRelay((list) => [...list, '2'])
                        } else {
                          relay.splice(relay.indexOf('2', 1))
                        }
                      }}
                      onClick={() => setIsChecked(!isChecked)}
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
                        if (e.target.checked == true) {
                          setRelay((list) => [...list, '3'])
                        } else {
                          relay.splice(relay.indexOf('3', 1))
                        }
                      }}
                      onClick={() => setIsChecked(!isChecked)}
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
                        if (e.target.checked == true) {
                          setRelay((list) => [...list, '4'])
                        } else {
                          relay.splice(relay.indexOf('4', 1))
                        }
                      }}
                      onClick={() => setIsChecked(!isChecked)}
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

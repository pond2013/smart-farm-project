import React, { useState } from 'react'
import './addhumid.scss'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function AddHumid() {
  const [humid, setHumid] = useState('')
  const [work, setWork] = useState('')
  const [timeStart, setTimeStart] = useState('')
  const username = localStorage.getItem('username')
  let history = new useHistory()

  const postUser = () => {
    ;(async () => {
      const rawResponse = await fetch(
        'http://localhost:8080/api/SetAirMoisture',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: '',
            timeToStart: timeStart,
            moisture: humid,
            duration: work,
            relayId: '3',
            user: username,
          }),
        },
      )
    })()
  }

  function saveClickk(e) {
    e.preventDefault()
    if (timeStart != '' && humid != '' && work != '') {
      postUser()
      history.push('../Humid')
    } else {
      alert('Invalid or Incomplete')
    }
  }

  return (
    <>
      <div className="bg-addhumid">
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าความชื้น
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addsoil m-5 p-5">
              <Row className="m-2 p-2">
                <Row className="p-1">
                  <p>เริ่มทำงาน</p>
                  <input
                    type="time"
                    onChange={(e) => {
                      setTimeStart(e.target.value)
                    }}
                  ></input>
                </Row>
                <Row className="p-1">
                  <p>ความชื้น</p>
                  <input
                    type="number"
                    placeholder="0-100% RH"
                    onChange={(e) => {
                      setHumid(e.target.value)
                    }}
                  ></input>
                </Row>
                <Row className="p-1">
                  <p>ทำงาน (นาที)</p>
                  <input
                    type="number"
                    placeholder="0"
                    onChange={(e) => {
                      setWork(e.target.value)
                    }}
                  ></input>
                </Row>
              </Row>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <input
              type="submit"
              value="บันทึก"
              onClick={saveClickk}
              id="saveaddhumid"
            ></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default AddHumid

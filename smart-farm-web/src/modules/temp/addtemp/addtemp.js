import React, { useState } from 'react'
import './addtemp.scss'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function AddTemp() {
  const [temp, setTemp] = useState('')
  const [work, setWork] = useState('')
  const username = localStorage.getItem('username');
  let history = new useHistory()

  const postUser = () => {
    (async () => {
        const rawResponse = await fetch('http://localhost:8080/api/SetTemp', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              id:"",
              tempToStart: temp,
              duration: work,
              relayId: "1",
              user: username
            })
        });
        
      })();
    }

  const saveClickk = async (e) => {
    postUser();
    console.log(temp)
    console.log(work)
    e.preventDefault()
    history.push('../temp')
  }

  return (
    <>
      <div className="bg-addtemp">
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center text-temp">
            เพิ่มการตั้งค่าอุณหภูมิ
          </h2>
          <div className="d-flex justify-content-center">
            <div className="card-addtemp m-5 p-5">
              <Row className="m-2 p-2">
                <Row className="p-1">
                  <p>อุณหภูมิ (℃)</p>
                  <input
                    type="number"
                    id="temp"
                    name="temp"
                    placeholder="0"
                    onChange={(e) => {
                      setTemp(e.target.value)
                    }}
                  ></input>
                </Row>
                <Row className="p-1">
                  <p>ทำงาน (นาที)</p>
                  <input
                    type="number"
                    id="work"
                    name="work"
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
              id="savebutton"
            ></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default AddTemp

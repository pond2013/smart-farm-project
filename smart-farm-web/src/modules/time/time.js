import React, { useEffect } from 'react'
import './time.scss'
import { Row, Col, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router-dom'

function Time() {
  useEffect(() => {
    getData()
  }, [])

  let history = new useHistory()
  const username = localStorage.getItem('username')
  var thisJson
  function AddClick() {
    history.push('/addtime')
  }
  function setCardInPlane(ddmmyy, timetoStart, duration, relayId, row) {
    var tbody = document.getElementById('cases-time')
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var td5 = document.createElement('td')
    var delButton = document.createElement('a')
    delButton.className = 'delete-button'
    td1.textContent = ddmmyy
    td2.textContent = timetoStart
    td3.textContent = duration
    td4.textContent = relayId
    delButton.textContent = 'ลบ'
    td5.appendChild(delButton)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tr.appendChild(td5)
    tbody.appendChild(tr)
    tr.id = 'row' + row
    tr.value = row
    delButton.addEventListener('click', (e) => {
      delData(e.target.parentElement.parentElement.value)
    })
  }
  const getData = () => {
    fetch('http://localhost:8080/api/SetTime')
      .then((response) => response.json())
      .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
        for (let item in responseJSON) {
          if (responseJSON[item].user == username) {
            setCardInPlane(
              responseJSON[item].ddmmyy,
              responseJSON[item].timeToStart,
              responseJSON[item].duration,
              responseJSON[item].relayId,
              item,
            )
          }
        }
      })
  }
  const delData = (int) => {
    console.log(thisJson[int])
    fetch('http://localhost:8080/api/SetTime/RelayByContext', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ddmmyy: thisJson[int].ddmmyy,
        timeToStart: thisJson[int].timeToStart,
        duration: thisJson[int].duration,
        relayId: thisJson[int].relayId,
        user: thisJson[int].user,
      }),
    }).then((response) => {
      if (response.ok == true) {
        window.location.reload(false)
      } else {
        alert('Failed to delete, try again later')
      }
    })
  }

  return (
    <>
      <div className="bg-time">
        <Container className="m-4 ms-4 p-4">
          <Row className="m-1">
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
              <thead className="head-table">
                <tr>
                  <th>วัน/เดือน/ปี</th>
                  <th>เวลาในการเริ่มทำงาน</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="cases-time"></tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Time

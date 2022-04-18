import React, {useEffect} from 'react'
import './temp.scss'
import Table from 'react-bootstrap/Table'
import { useHistory} from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'


function Temp() {
  useEffect(() => {
    getData()
  }, [])
  const username = localStorage.getItem('username')
  var thisJson
  let history = new useHistory();
  function AddClick() {
    history.push('/addtemp')
  }
  function setCardInPlane(temptoStart, duration, relayId, row) {
    var tbody = document.getElementById('cases-temp')
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var td4 = document.createElement('td')
    var delButton = document.createElement('a')
    delButton.className = 'delete-button'
    td1.textContent = temptoStart
    td2.textContent = duration
    td3.textContent = relayId
    delButton.textContent = 'ลบ'
    td4.appendChild(delButton)
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    tbody.appendChild(tr)
    tr.id = 'row' + row
    tr.value = row
    delButton.addEventListener('click', (e) => {
      delData(e.target.parentElement.parentElement.value)
    })
  }
  const getData = () => {
    fetch("http://localhost:8080/api/SetTemp")
    .then((response) => response.json())
    .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
        for (let item in responseJSON) {
          if(responseJSON[item].user == username){
            setCardInPlane(responseJSON[item].tempToStart,responseJSON[item].duration,responseJSON[item].relayId,item)
          }
        }
    });
    }
    const delData = (int) => {
      console.log(thisJson[int])
      fetch("http://localhost:8080/api/SetTemp/TempByContext" , {method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            tempToStart: thisJson[int].tempToStart,
            duration: thisJson[int].duration,
            relayId: thisJson[int].relayId,
            user: thisJson[int].user
          })})
      .then((response) => {
        if (response.ok == true) {
          window.location.reload(false);
        }else {
          alert("Failed to delete, try again later")
        }
      });
    }

  return (
    <>
      <div
        className="bg-temp"
        
      >
        <Container className='m-4 ms-4 p-4'>
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
              <tbody id="cases-temp">
              </tbody>
            </Table>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default Temp

import React from 'react'
import './humid.scss'
import Table from 'react-bootstrap/Table'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function Humid() {
  let history = new useHistory()
  function AddClick() {
    history.push('/addhumid')
  }


const getUser = () => {
  console.log("Testing : ")
  fetch("http://localhost:8080/api/User")
    .then((response) => response.json())
    .then((responseJSON) => {
        // do stuff with responseJSON here...
        console.log(responseJSON);

    });
  }

const postUser = () => {
  (async () => {
      const rawResponse = await fetch('http://localhost:8080/api/User', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            id: "",
            pid: 343766, 
            name: "Inazuma", 
            Email: "https://nxxxxxx.net/g/383661/",
            Password: "SweetTeaMonster"
          })
      });
      const content = await rawResponse.json();
    
      console.log(content);
    })();
  }
  const randomNum= () => {
    console.log("Random Testing : ")
    fetch("http://localhost:8080/api/Sample/giverandomnumber?start=25&end=34")
      .then((response) => response.json())
      .then((responseJSON) => {
          // do stuff with responseJSON here...
          console.log(responseJSON);
  
      });
      
    }
  return (
    <>
      <div className="bg-humid">
        <Container className="m-4 ms-4 p-4">
          <Row className="m-1">
            <Col sm={11}>
              <h2 className="ms-5 text-setting">ตั้งค่าความชื้น</h2>
            </Col>
            <Col sm={1}>
              <input
                type="submit"
                value="ADD"
                onClick={AddClick}
                id="add-humid"
              ></input>
            </Col>
          </Row>

          <Row>
            <Table responsive="sm">
              <thead className="head-humid">
                <tr>
                  <th>เริ่มทำงาน</th>
                  <th>ความชื้น(%RH)</th>
                  <th>ทำงาน(นาที)</th>
                  <th>รีเลย์</th>
                  <th></th>
                </tr>
              </thead>
              <tbody id="cases-humid">
                <tr>
                  <td>08:30 AM</td>
                  <td>40 %RH</td>
                  <td>12</td>
                  <td>1</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>09:30 AM</td>
                  <td>50 %RH</td>
                  <td>120</td>
                  <td>11</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
                <tr>
                  <td>07:30 AM</td>
                  <td>4 %RH</td>
                  <td>129</td>
                  <td>10</td>
                  <td>
                    <a href="">ลบ</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
          <button onClick={getUser}> GET ME </button>
          <button onClick={postUser}> POST ME </button>
          <button onClick={randomNum}> RANDOM ME </button>
        </Container>
      </div>
    </>
  )
}

export default Humid

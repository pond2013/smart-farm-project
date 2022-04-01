import React from 'react'
import './addtemp.scss'
import bg from '../../assets/img/100.jpg'
import { useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function addTemp() {
    let history = new useHistory();
  function saveClickk() {
        history.push('../temp');
  }

  return (
    <>
      <div
        className="bg-addtemp"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <Container className="m-5">
          <h2>เพิ่มการตั้งค่าอุณหภูมิ</h2>
          <div className="card-addtemp">
            <p>อุณหภูมิ</p>
            <input type="number"></input>
            <p>ทำงาน (นาที)</p>
            <input type="number"></input>
            <p>รีเลย์</p>
            <div>
              <input
                type="checkbox"
                id="relay1"
                name="interest"
                value="relay1"
              ></input>
              <label for="relay1">รีเลย์ 1</label>
            </div>
          </div>
          <input
            type="submit"
            value="SAVE"
            onClick={saveClickk}
            id="savebutton"
          ></input>
        </Container>
      </div>
    </>
  )
}
export default addTemp

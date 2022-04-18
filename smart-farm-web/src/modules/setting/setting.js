import React, {useState, useEffect} from 'react'
import './setting.scss'
import { useHistory } from 'react-router-dom'
import { Row, Container } from 'react-bootstrap'

function Setting() {
  useEffect(() => {
    setInitPln()
  }, [])
  
  let history = new useHistory();
  const [plant, setPlant] = useState('')
  const [board, setBoard] = useState('')
  const plantGet = localStorage.getItem('plant')
  const boardGet = localStorage.getItem('board')

  function setInitPln(){
    document.getElementById("plantInput").value = plantGet
    document.getElementById("boardInput").value = boardGet
  }

  function saveClickk(e){
    e.preventDefault()
    if (plant != '' && board != '') {
      localStorage.setItem('plant', plant)
      localStorage.setItem('board', board)
      history.push('../main')
    } else {
      alert('Plant or Board Incomplete')
    }
  }
  return (
    <>
      <div
        className="bg-setting"
      >
        <Container className="m-5 p-5">
          <h2 className="p-3 d-flex justify-content-center">ตั้งค่าระบบ</h2>
          <div className="d-flex justify-content-center">
            <div className="card-setting m-2 p-2 ">
              <Row className='p-1 '>
                <p>ชนิดของพืข</p>
                <input type="text" placeholder="กรุณากรอกชนิดของพืช" id="plantInput" onChange={(e) => {setPlant(e.target.value)}}></input>
              </Row>
              <Row className='p-1'>
                <p>หมายเลขบอร์ด</p>
                <input type="text" placeholder="192.168.1.105" id="boardInput" onChange={(e) => {setBoard(e.target.value)}}></input>
              </Row>
            </div>
          </div>

          <div className="d-flex justify-content-center m-5">
            <input type="submit" value="บันทึก" id="savebutton" onClick={saveClickk}></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default Setting

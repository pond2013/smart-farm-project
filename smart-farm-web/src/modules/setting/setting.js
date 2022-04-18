import React, {useRef, useEffect} from 'react'
import './setting.scss'
import { useHistory } from 'react-router-dom'
import { Row, Container } from 'react-bootstrap'

function Setting() {
  useEffect(() => {
    getData()
  }, [])
  
  let history = new useHistory();
  var thisJson
  const plant = useRef(null)
  const node= useRef(null)

  const username = localStorage.getItem('username')

  function saveClickk(e){
    e.preventDefault()
    let url = "http://localhost:8080/api/User/ByUsername/"
    console.log(thisJson)
    if (plant.current.value != '' && node.current.value != '') {
      fetch(url+username , {method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: thisJson.name,
            email:  thisJson.email,
            password: thisJson.password,
            plant: plant.current.value,
            nodeIP: node.current.value
          })})
      .then((response) => {
        if (response.ok == true) {
          alert('Plant or Board updated Returning to main page')
          history.push('../main')
        }else {
          alert('Plant or Board Update Failed')
        }
      });
    } else {
      alert('Please fill the input')
    }
  }

  const getData = () => {
    let url = "http://localhost:8080/api/User/By/"
    fetch(url+username)
    .then((response) => response.json())
    .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
        console.log(thisJson)
        if ((responseJSON.plant == null || responseJSON.plant == "" ) && (responseJSON.nodeIP == null || responseJSON.plant == "" )) {
            alert("Please input your plant type and your node IP")
        } else {
            plant.current.value = responseJSON.plant
            node.current.value = responseJSON.nodeIP
        }
    });
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
                <input type="text" placeholder="กรุณากรอกชนิดของพืช" id="plantInput" ref={plant}></input>
              </Row>
              <Row className='p-1'>
                <p>หมายเลขบอร์ด</p>
                <input type="text" placeholder="192.168.1.105" id="boardInput" ref={node}></input>
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

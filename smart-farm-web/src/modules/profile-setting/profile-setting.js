import React , {useRef, useEffect} from 'react'
import './profile-setting.scss'
import icon from '../../assets/img/modified-icon.png'
import { useHistory } from 'react-router-dom'
import { Row, Col, Container } from 'react-bootstrap'

function ProfileSetting() {
  useEffect(() => {
    getData()
  }, [])
  let history = new useHistory()
  var thisJson
  const newUsername = useRef(null)
  const email = useRef(null)
  const password = useRef(null)
  const username = localStorage.getItem('username')


  const getData = () => {
    let url = "http://localhost:8080/api/User/By/"
    fetch(url+username)
    .then((response) => response.json())
    .then((responseJSON) => {
        // do stuff with responseJSON here...
        thisJson = responseJSON
        newUsername.current.value = responseJSON.name
        email.current.value = responseJSON.email
        password.current.value = responseJSON.password
        
    });
  }

  function saveClickk(e){
    e.preventDefault()
    let url = "http://localhost:8080/api/User/ByUsername/"
    console.log(thisJson)
    if (newUsername.current.value != '' && email.current.value != '' && password.current.value != '') {
      fetch(url+username , {method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: newUsername.current.value,
            email:  email.current.value,
            password: password.current.value,
            plant: thisJson.plant,
            nodeIP: thisJson.nodeIP
          })})
      .then((response) => {
        if (response.ok == true) {
          alert('Profile updated, Returning to main page')
          localStorage.setItem('username', newUsername.current.value)
          history.push('../main')
        }else {
          alert('Update Failed')
        }
      });
    } else {
      alert('Please fill the input')
    }
  }
  return (
    <>
      <div
        className="bg-profile-setting"
      >
        <Container className="m-5 p-5">
          <h2>การตั้งค่าบัญชี</h2>
          <div className='m-5 profile-setting'>
            <Row className='p-2'>
              <Col className='m-2'>
                <p>ชื่อผู้ใช้</p>
              </Col>
              <Col xs={7}>
                <input type="text" ref={newUsername}></input>
              </Col>
              <Col className='m-2'>
              </Col>
            </Row>
            <Row className='m-1'>
              <Col className='m-2'>
                <p>E-mail</p>
              </Col>
              <Col xs={7}>
                <input type="email" ref={email}></input>
              </Col>
              <Col className='m-2'>
              </Col>
            </Row>
            <Row className='m-1'>
              <Col className='m-2'>
                <p>Password</p>
              </Col>
              <Col xs={7}>
                <input type="password" ref={password}></input>
              </Col>
              <Col className='m-2'>
              </Col>
            </Row>
          </div>
          <div className="d-flex justify-content-center m-5">
            <input type="submit" value="บันทึก" id="savebutton" onClick={saveClickk}></input>
          </div>
        </Container>
      </div>
    </>
  )
}
export default ProfileSetting

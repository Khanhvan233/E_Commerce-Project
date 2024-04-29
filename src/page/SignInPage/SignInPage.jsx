import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import imageLogo from '../../assets/images/logo-login.jpg'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { Image } from 'antd'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import axios from 'axios'
import * as message from '../../components/Message/Message'


const SignInPage = () => {

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleSignIn = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/login`, {
      params: {
        username: email,
        password: password
      }
    })
    .then(response => {
      if (response.status === 200) {
        message.success('Login successful')
      } else {
        message.error('We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.')
      }
    })
    .catch(error => {
      message.warning('Fail to login because of some error')
      // Xử lý lỗi hoặc hiển thị thông báo lỗi  
    })
  }
  

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.53)', height: '100vh'}}>
      <div style={{width: '800px', height: '445px', borderRadius: '6px', background: '#fff', display: 'flex'}}>
        <WrapperContainerLeft>
          <h1>Xin chào</h1>
          <p>Đăng nhập bằng tài khoản Admin</p>
          <InputForm style={{marginBottom: '10px'}} placeholder='Username' value={email} onChange={handleOnchangeEmail} />
          <div style={{position: 'relative'}}>
            <span 
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '15px',
                right: '8px',
              }}>{
                isShowPassword ? (
                  <EyeFilled/>
                ):(
                  <EyeInvisibleFilled/>
                )
              }
            </span>
              <InputForm 
                placeholder='password' type={isShowPassword ? "text" : "Password"} 
                value={password} onChange={handleOnchangePassword}
              />
          </div>
          <ButtonComponent
            disabled={!email.length || !password.length} //no active log in 
            onClick={handleSignIn}
            bordered ={false}
            size={40}
            styleButton={{
              background: 'rgb(255, 57, 69)',
              height: '48px',
              wdith: '100%',
              border: 'none',
              borderRadius: '4px',
              margin: '26px 0 10px'
            }}
            textButton={'Đăng nhập'}
            styleTextButton={{color: '#fff', fontSize: '15px', fontWeight: '700'}}
          >
          </ButtonComponent>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <Image src={imageLogo} preview ={false} alt='image-logo' height='203px' width='203px'/>
          <h4>Hệ thống trang web thương mại điện tử</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage
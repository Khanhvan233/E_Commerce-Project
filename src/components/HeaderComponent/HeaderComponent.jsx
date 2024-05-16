import React, { useState } from 'react'
import { Badge, Col} from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useDispatch } from 'react-redux';
import * as utills from '../../utills';
import { useNavigate } from 'react-router-dom';
import {
  PhoneOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';


const HeaderComponent = () => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  const [search, setSearch] =useState('')

  const handleNavigateLogin = () => {
    navigate('/admin')
  }
  const handleNavigateMain = () => {
    navigate('/')
  }
  const handleNavigatecCart = () => {
    navigate('/cart')
  }

  const onSearch =(e) =>{
    console.log('e',e.target.value)
  }
  const num = utills.getCart()
  const cartCount = num.length
   
  return (
    <div style={{width: '100%', background:'rgb(153, 51,, 255)', display:'flex', justifyContent:'center'}}>
      <WrapperHeader>
        <Col span={5} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '40px'}}>
            <div onClick={handleNavigateMain} style={{cursor: 'pointer'}}>
              <WrapperTextHeader>Rèm Cửa Đại Việt</WrapperTextHeader>
            </div>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"  
            bordered="false"
            textButton="Tìm kiếm"
            placeholder="input search text"
            onChange={onSearch}
         />
        </Col>
        <Col span={6} style={{display: 'flex', gap:'54px', alignItems:'center'}}>
          { <WrapperHeaderAccount>
            <PhoneOutlined style={{fontSize: '30px'}}/>
            
            <div onClick={handleNavigateLogin} style={{cursor: 'pointer'}}>
              <WrapperTextHeaderSmall style={{fontSize: '13px'}}>Liên hệ chăm sóc khách hàng</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall style={{fontSize: '13px'}}>0123456789</WrapperTextHeaderSmall> 
              </div>
            </div>
          </WrapperHeaderAccount>}
          <div>
            <Badge count={cartCount} size='small'>
              <ShoppingCartOutlined style={{cursor: 'pointer',fontSize: '30px', color: 'rgb( 172, 59, 97)'}}
               onClick={handleNavigatecCart}/>  
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
} 

export default HeaderComponent
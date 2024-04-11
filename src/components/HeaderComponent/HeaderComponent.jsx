import React from 'react'
import { Col } from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
// import Search from 'antd/lib/transfer/search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,

} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center'}}>
          <WrapperTextHeader>Rèm Cửa Violet</WrapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="input search text"
         />
        </Col>
        <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center'}}>
          <WrapperHeaderAccount>
            <UserOutlined style={{fontSize: '30px'}}/>
            <div>
              <WrapperTextHeaderSmall>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                <CaretDownOutlined />  
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <ShoppingCartOutlined style={{fontSize: '30px'}}/>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
} 

export default HeaderComponent
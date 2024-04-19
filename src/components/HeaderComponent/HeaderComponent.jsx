import React from 'react'
import { Badge, Col} from 'antd';
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from './style';
import {
  PhoneOutlined 
} from '@ant-design/icons';
// import Search from 'antd/lib/transfer/search'
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,

} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div style={{width: '100%', background:'rgb(26, 148,, 255)', display:'flex', justifyContent:'center'}}>
      <WrapperHeader>
        <Col span={5} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '40px'}}>
          <WrapperTextHeader>Rèm Cửa</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch
            size="large"
            bordered="false"
            textButton="Tìm kiếm"
            placeholder="input search text"
         />
        </Col>
        <Col span={6} style={{display: 'flex', gap:'54px', alignItems:'center'}}>
          { <WrapperHeaderAccount>
            <PhoneOutlined style={{fontSize: '30px'}}/>
            <div>
              <WrapperTextHeaderSmall style={{fontSize: '13px'}}>Liên hệ chăm sóc khách hàng</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall style={{fontSize: '13px'}}>0123456789</WrapperTextHeaderSmall> 
              </div>
            </div>
          </WrapperHeaderAccount>}
          <div>
            <Badge count={3} size='small'>
              <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}} />  
            </Badge>
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  )
} 

export default HeaderComponent
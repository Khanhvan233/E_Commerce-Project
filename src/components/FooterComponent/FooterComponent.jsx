import React from 'react'
import { Badge, Col, Layout} from 'antd';
import { WrapperFooter, WrapperTextFooter  } from './style';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';

import {
    InstagramOutlined, 
    FacebookOutlined, 
    YoutubeOutlined, 
    GithubOutlined, 
} from '@ant-design/icons';

const FooterComponent = () => {
  return (
    <div style={{width: '100%', background:'rgb(153, 51,, 255)', display:'flex', justifyContent:'center' ,left:'0px', bottom: '0px'}}>
        <WrapperFooter>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '40px', padding:'20px'}}>
                <div>
                <WrapperTextFooter>Chăm sóc khách hàng</WrapperTextFooter>
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '40px', padding:'20px'}}>
                <div>
                <WrapperTextFooter>Về Đại Việt</WrapperTextFooter>
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '40px', padding:'20px'}}>
                <div>
                <WrapperTextFooter>Thông tin liên hệ</WrapperTextFooter>
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '40px', padding:'20px'}}>
                <div>
                <WrapperTextFooter>Kết nối với chúng tôi</WrapperTextFooter>
                </div>
            </Col>

        </WrapperFooter>
    </div>
  )
}

export default FooterComponent
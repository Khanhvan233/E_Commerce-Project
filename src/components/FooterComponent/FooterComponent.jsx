import React from 'react'
import { Badge, Col, Layout, Row} from 'antd';
import { WrapperFooter, WrapperTextFooter, WrapperText, WrapperText2, WrapperText3, WrapperText4, WrapperText5 } from './style';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';
import {PhoneOutlined,HomeOutlined,SendOutlined} from '@ant-design/icons'
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
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '20px', padding:'20px'}}>
                <div>
                    <Row>
                        <WrapperTextFooter>Chăm sóc khách hàng</WrapperTextFooter>
                    </Row>
                    <Row>
                        <WrapperText4>Trang chủ</WrapperText4>
                    </Row>
                    <Row>
                        <WrapperText4>Giới thiệu</WrapperText4>
                    </Row>
                    <Row>
                        <WrapperText4>Danh mục</WrapperText4>
                    </Row>
                    <Row>
                        <WrapperText4>Hướng dẫn sử dụng</WrapperText4>
                    </Row>
                    
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '-40px', padding:'-40px'}}>
                <div>
                <   Row>
                        <WrapperTextFooter >Về Đại Việt</WrapperTextFooter>
                    </Row>
                    <Row>
                        <WrapperText2 style={{marginBottom: '80px'}}>Chuyên bán tất cả các loại rèm cửa</WrapperText2>
                    </Row>
                
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'10px', alignItems:'center', marginLeft: '20px', padding:'10px', marginBottom: '40px'}}>
                <div>
                    <Row>
                        <WrapperTextFooter>Thông tin liên hệ</WrapperTextFooter>
                    </Row>
                    <Row>
                        <PhoneOutlined style={{fontSize: '20px', color:'rgb(128,0,128)'}} />
                        <WrapperText3>1900 2535</WrapperText3>
                    </Row>

                    <Row>
                        <HomeOutlined style={{fontSize: '20px', color:'rgb(128,0,128)', }} />
                        <WrapperText4>907b Lữ Gia,Q.11, TPHCM</WrapperText4>
                        
                    </Row>
                    
                    <Row>
                        <SendOutlined style={{fontSize: '20px', color:'rgb(128,0,128)'}} />
                        <WrapperText4> trangtuanminh@gmail.com</WrapperText4>
                    </Row>
                    
                </div>
            </Col>
            <Col span={6} style={{display: 'flex', gap:'20px', alignItems:'center', marginLeft: '-10px', padding:'-5px', marginBottom:'50px'}}>
                <div>
                <Row>
                    <WrapperTextFooter>Kết nối với chúng tôi</WrapperTextFooter>
                </Row>
                <Row>
                    <WrapperText5>Mai Thanh Hải - 0987654321</WrapperText5>
                </Row>
                <Row>
                    <WrapperText5>Nguyễn Trần Khánh Văn - 0123459876</WrapperText5>
                </Row>
                <Row>
                    <WrapperText5>Trang Tuấn Minh - 012345678</WrapperText5>
                </Row>
                </div>
                
            </Col>

        </WrapperFooter>
    </div>
  )
}

export default FooterComponent
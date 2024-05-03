import React, { Fragment } from 'react'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent'
import { Row, Pagination, Col } from 'antd'
import { WrapperProducts, WrapperNavbar } from './style'


const TypeProductPage = () => {
  const onChange = () => { }
  return (
    <div style={{width: '100%', background: '#efefef'}}>
      <div style={{width: '1270', margin: '0 auto'}}>
        <Row style={{flexWrap: 'nowrap', paddingTop: '10px' }}>
          <WrapperNavbar spam = {4}>
              <NavbarComponent/>
          </WrapperNavbar>  
          <Col span = {20}>
            <WrapperProducts>
                <CardComponent/>    
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>    
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>     
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
                <CardComponent/>  
            </WrapperProducts>
            <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{textAlign: 'center', marginTop: '20px', marginBottom: '20px'}} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default TypeProductPage
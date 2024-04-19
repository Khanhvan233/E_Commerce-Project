import React from 'react'
import { Image, Row, Col} from 'antd';
import ImageProduct from '../../assets/images/remcua1.jpg'
import ImageProductSmall from '../../assets/images/SmallProduct.jpg'
import {StarFilled,PlusOutlined,MinusOutlined, DownloadOutlined} from '@ant-design/icons'
import { InputNumber, Button } from 'antd';

import { WrapperStyleImageSmall, WrapperStyleColImage, WrapperStyleNameProduct, WrapperStyleTextSell, WrapperPriceProduct, WrapperPriceTextProduct, WrapperAddressProduct, WrapperQualityProduct,WrapperButton, WrapperInputNumber } from './style'
const ProductDetailComponent = () => {
  const onChange = () => {}
  return (
      <Row style={{padding: '16px'}}>
        <Col span={10}>
          <Image src={ImageProduct} alt='image product' preview={false} />
          <div>
            <Row style={{paddingTop: '5px',justifyContent: 'space-between'}}>
              <WrapperStyleColImage span={6} sty>
                <WrapperStyleImageSmall src={ImageProductSmall} alt='image product small' preview={false}></WrapperStyleImageSmall>
              </WrapperStyleColImage>
              <WrapperStyleColImage span={6}>
                <WrapperStyleImageSmall src={ImageProductSmall} alt='image product small' preview={false}></WrapperStyleImageSmall>
              </WrapperStyleColImage>
              <WrapperStyleColImage span={6}>
                <WrapperStyleImageSmall src={ImageProductSmall} alt='image product small' preview={false}></WrapperStyleImageSmall>
              </WrapperStyleColImage>
              <WrapperStyleColImage span={6}>
                <WrapperStyleImageSmall src={ImageProductSmall} alt='image product small' preview={false}></WrapperStyleImageSmall>
              </WrapperStyleColImage> 
            </Row>
          </div>
        </Col>
        <Col style={{paddingLeft: '10px '}} span={14}>
          <WrapperStyleNameProduct>Rèm cửa tiện dùng cho nhà</WrapperStyleNameProduct>
          <div>
            <StarFilled style={{fontSize: '10px', color:'rgb(253,216,54)'}}/>
            <StarFilled style={{fontSize: '10px', color:'rgb(253,216,54)'}}/>
            <StarFilled style={{fontSize: '10px', color:'rgb(253,216,54)'}}/>
            <StarFilled style={{fontSize: '10px', color:'rgb(253,216,54)'}}/>
            <StarFilled style={{fontSize: '10px', color:'rgb(253,216,54)'}}/>
            <WrapperStyleTextSell>| Đã Bán Được 100</WrapperStyleTextSell>
          </div>
          <WrapperPriceProduct>
            <WrapperPriceTextProduct>200.000</WrapperPriceTextProduct>
          </WrapperPriceProduct>
          <WrapperAddressProduct>
            <span>Giao từ</span>
            <span className='address'>      Quận 1, P.Bến Nghé, Hồ Chí Minh   </span>
            <div></div>
            <span>Giao đến</span>
            <span className='address'>      Quận 1, P.Bến Nghé, Hồ Chí Minh   </span>
            <span className='change'>   Đổi địa chỉ </span>
          </WrapperAddressProduct>
          <div style={{margin: '10px 0 20px', borderTop:' 1px solid #e5e5e5', borderBottom: ' 1px solid #e5e5e5'}}>
            <div style={{marginBottom: '9px', marginTop:'5px'}}>Số lượng</div>
            <WrapperQualityProduct style={{marginBottom: " 15px"}}>
                <button style={{border: 'none', background:'transparent'}}>
                  <MinusOutlined style={{color: "#000", fontSize: '20px'}}/>
                </button>

                <WrapperInputNumber size="small" width="20%" defaultValue={0} onChange={onChange} />
                
                <button style={{border: 'none', background:'transparent'}}>
                  <PlusOutlined style={{color: "#000", fontSize: '20px'}}/>
                </button>
                
              
            </WrapperQualityProduct>
          </div>
          <div style={{paddingTop: '20px', display: 'flex', alignItems:'center', gap: '12px'}}>
            <Button style={{ width: '220px', height: '50px', background: 'rgb(255,57,69)'}} type="primary" >
              Chọn mua
            </Button>

            <Button style={{ width: '220px', height: '50px', background: 'rgb(13,92,182)'}} type="primary" >
              Mua trước trả sau
            </Button>
          </div>
        </Col>
      </Row>
    
  )
}

export default ProductDetailComponent
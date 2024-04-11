import {Card} from 'antd'
import {Flex,Tag} from 'antd'
import { Meta } from 'antd/es/list/Item'
import React from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {StarFilled} from '@ant-design/icons'
import remcua1 from '../../assets/images/remcua1.jpg'
const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{width:'200px', height:'200px'}}
      style={{width: 240,}}
      bodyStyle={{padding:'10px'}}
      cover={<img alt="example" src={remcua1} />}
    >
      <Flex gap="4px 0" wrap="wrap">
        <Tag style={{width: '68px',height:'18px', position:'absolute', top: 0, left: 0}} color="orange">Hot</Tag>
      </Flex>
      <StyleNameProduct>RemCua</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: '4px'}}>
          <span>4.96 </span><StarFilled style={{fontSize: '10px', color:'yellow'}}/>
        </span>
        <span>| Đã Bán Được 100</span> 
      </WrapperReportText>
       <WrapperPriceText>
        500.000đ
        <WrapperDiscountText>
             -5%
        </WrapperDiscountText>
      </WrapperPriceText> 
    </WrapperCardStyle>
  )
}

export default CardComponent

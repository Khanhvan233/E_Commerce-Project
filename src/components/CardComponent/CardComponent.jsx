import {Card} from 'antd'
import {Flex,Tag} from 'antd'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReportText } from './style'
import {StarFilled} from '@ant-design/icons'
const CardComponent = (props) => {
  const {ten_rem, hinh_anh, xuat_xu, bao_hanh, gia_goc, chat_lieu, don_vi, trang_thai, kich_thuoc, id} =props
  return (
    <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}
            style={{ width: 200 }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={hinh_anh} />}

        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}
            />
      <Flex gap="4px 0" wrap="wrap">
      </Flex>
    <StyleNameProduct>{ten_rem}</StyleNameProduct>
      <WrapperReportText>
        <span style={{marginRight: '4px'}}>
          <span>{chat_lieu}</span><StarFilled style={{fontSize: '10px', color:'yellow'}}/>
        </span>
        <span>| Còn lại {trang_thai}</span> 
      </WrapperReportText>
       <WrapperPriceText>
        <span style={{marginRight: '8px'}}>{gia_goc}</span>
        <WrapperDiscountText>
             -5%
        </WrapperDiscountText>
      </WrapperPriceText> 
    </WrapperCardStyle>
  )
}

export default CardComponent

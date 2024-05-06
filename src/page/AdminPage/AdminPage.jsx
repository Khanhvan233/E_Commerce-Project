import { Menu } from 'antd'
import React, { useState } from 'react'
import { getItem } from '../../utills'
import {
  AccountBookOutlined, 
  AppstoreOutlined, 
  ApartmentOutlined,
  LineChartOutlined,
  DatabaseOutlined
}from '@ant-design/icons'
import Discount from '../../components/Discount/Discount'
import Product from '../../components/Product/Product'
import Type from '../../components/Type/Type'
import Order from '../../components/Order/Order'
import Statistic from '../../components/Statistic/Statistic'
const AdminPage = () => {
  const items = [
    getItem('Sản Phẩm', 'product', <AppstoreOutlined />),
    getItem('Khuyến mãi', 'discount', <AccountBookOutlined />),
    getItem('Loại Rèm', 'type', <ApartmentOutlined />),
    getItem('Đơn hàng', 'order', <DatabaseOutlined />),
    getItem('Thống Kê', 'statistic', <LineChartOutlined />)
  ]

  const renderPage = (key) => {
    switch(key) {
      case 'discount':
        return (
          <Discount/>
        )
      case 'product':
        return (
          <Product/>
        )
      case 'type':
        return (
          <Type/>
        )
      case 'order':
        return (
          <Order/>
        )
        case 'statistic':
          return (
            <Statistic/>
          )
        default:
          return <></>
    }
  }

  const [keySelected ,setKeySelected] = useState('')
  console.log('keySelected', keySelected)

  const handleOnClick = ({key}) =>{
    setKeySelected(key)
  }

  return (
    <div style={{display: 'flex', height:'700px'}}>
      <Menu
        mode='inline'
        style={{
          width: 256,
        }}
        items={items}
        onClick={handleOnClick}
      />
      <div style={{ flex : 1, padding: '15px' }}>    
        {renderPage(keySelected)}
      </div>
    </div>
  )
}

export default AdminPage
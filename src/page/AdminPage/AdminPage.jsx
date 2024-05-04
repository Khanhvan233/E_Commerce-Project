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

const AdminPage = () => {
  const items = [
    getItem('Khuyến mãi', 'discount', <AccountBookOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
    getItem('Sản Phẩm', 'product', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8') ]),
    ]),
    getItem('Loại Rèm', 'type', <ApartmentOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
    getItem('Đơn hàng', 'order', <DatabaseOutlined />, [
      getItem('Option 13', '13'),
      getItem('Option 14', '14'),
      getItem('Option 15', '15'),
      getItem('Option 16', '16'),
    ]),
    getItem('Thống Kê', 'statistic', <LineChartOutlined />, [
      getItem('Option 17', '17'),
      getItem('Option 18', '18'),
      getItem('Option 19', '19'),
      getItem('Option 20', '20'),
    ])
  ]

  const rootSubmenuKeys =['discount','user','type', 'order', 'statistic']
  const [openKeys, setOpenKeys] = useState(['discount'])
  const [keySelected ,setKeySelected] = useState('')

  const onOpenChange = (keys) =>{
    console.log('keys', keys)
    const lastOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(lastOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(lastOpenKey? [lastOpenKey] : [])
    }
  }

  const handleOnClick = ({key}) =>{
    setKeySelected(key)
  }

  return (
    <div style={{display: 'flex', height:'700px'}}>
      <Menu
        mode='inline'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={items}
        onClick={handleOnClick}
      />
      <div>
        { keySelected === '6' && <span>Key la 6</span> }
        
      </div>
    </div>
  )
}

export default AdminPage
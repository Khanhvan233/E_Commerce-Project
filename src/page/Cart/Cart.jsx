import React, { useEffect, useState } from 'react'
import { WrapperLeft, WrapperRight, WrapperInfo, WrapperTotal,WrapperCountOrder, WrapperItemOrder, WrapperListOrder, WrapperInputNumber} from './style'
import { Button, Form, Select } from 'antd'
import remcua1 from '../../assets/images/remcua1.jpg'
import { DeleteOutlined, MinusOutlined, PlusOutlined} from '@ant-design/icons'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import InputComponent from '../../components/InputComponent/InputComponent'
import * as utills from '../../utills';
import { useQuery } from '@tanstack/react-query'
import { useForm } from 'antd/es/form/Form'
import * as OrderService from  '../../services/OrderService'
import * as ProductService from  '../../services/ProductService'
const Cart = () => {
  const [form] = useForm();
  const [stateCart, setStateCart] =useState('')
  const [cartItems, setCartItems] = useState([])
  const [stateOrder, setStateOrder] = useState({
    email: "", 
    dia_chi: "", 
    sdt: "", 
    id_trang_thai: "1", 
    id_hinh_thuc: "", 
    rems: [],
  })

  const loadLocalStorage =() =>{
    const res = utills.getCart()
    return res
  }

  const handleOnSelect = (value) => {
    setStateOrder({
      ...stateOrder,
      id_hinh_thuc: value
    });
  };

  const {data: localData} = useQuery({queryKey: ['local-storage'], queryFn: loadLocalStorage})
  
  const handleOnChange =(e) => {
    setStateOrder({
      ...stateOrder,
      [e.target.name] : e.target.value
    })
    console.log('e.target.name: ', e.target.name, e.target.value );
  }


  const handleConfirmOrder =() =>{
    setStateOrder((prevState) => ({
      ...prevState,
      rem: localData,
    }));
    console.log(stateOrder)
    OrderService.addOrder(stateOrder).then(res => {
      alert(" Thành công")
      setIsModalOpen(false)
    }).catch(error => {
      alert(" Thất Bại")
      setIsModalOpen(false)
    });
  }
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleCancel =() =>{
    setIsModalOpen(false)
  }
  const handleOK = async () => {
    setIsModalOpen(false)
  };


  return (
    <div style={{background: '#f5f5fa', with: '100%', height: '100%'}}>
      <div>
        <div style={{width:'1900px', height: '50px', fontSize:'25px', alignContent:'center', display:'flex',justifyContent:'center'  }}>
        </div>
        <div style={{fontSize:'25px', alignContent:'center', display:'flex',justifyContent:'center', marginBottom:'50px'}}>
          Giỏ hàng của bạn
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>
          <WrapperLeft>
          <WrapperListOrder>
          {localData?.map((cart) => {
              return (
            <WrapperItemOrder>
                <div style={{width: '390px', display: 'flex', alignItems: 'center', gap: 4}}> 
                  <img src={cart.hinh_anh} style={{width: '77px', height: '79px', objectFit: 'cover'}}/>
                  <div style={{
                    width: 260,
                    overflow: 'hidden',
                    textOverflow:'ellipsis',
                    whiteSpace:'nowrap'
                  }}>Rem ngủ</div>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span>
                    <span style={{ fontSize: '13px', color: '#242424' }}>{cart.gia}</span>
                  </span>
                  <WrapperCountOrder>
                    <WrapperInputNumber defaultValue={cart.so_luong} size="small" min={1} max={cart.con_lai} />
                  </WrapperCountOrder>
                  <span style={{color: 'rgb(255, 66, 78)', fontSize: '13px', fontWeight: 500}}>{cart.gia}</span>
                  <DeleteOutlined style={{cursor: 'pointer'}} />
                </div>
              </WrapperItemOrder>
               )
            })}  
          </WrapperListOrder>
          </WrapperLeft >
          <WrapperRight>
              <div style={{width: '100%'}}>
                <WrapperInfo>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight:'bold', fontSize: '15px'}}>
                    <span>Thông tin đơn hàng</span>
                  </div>
                </WrapperInfo>
                <WrapperTotal>
                  <span>Tổng tiền</span>
                  <span style={{display:'flex', flexDirection: 'column'}}>
                    <span style={{color: 'rgb(254, 56, 52)', fontSize: '24px', fontWeight: 'bold'}}>200.000</span>
                    <span style={{color: '#000', fontSize: '11px'}}>(Đã bao gồm VAT nếu có)</span>
                  </span>
                </WrapperTotal>
              </div>
              <Button
                type="primary"
                style={{
                    background: 'rgb(255, 57, 69)',
                    height: '48px',
                    width: '320px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
                onClick={() => setIsModalOpen(true)}
              >
                Thanh toán
              </Button>
          </WrapperRight>
        </div>
      </div>
      <div style={{height: '50px'}}>

      </div>
      <ModalComponent title="Thêm thông tin giao hàng" open={isModalOpen} onOk={handleConfirmOrder} onCancel={handleCancel}  width="40%">
          <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
          autoComplete="off"
        >
          <Form.Item
            label="Địa chỉ EMAIL"
            name="email"
            rules={[
              { required: true, message: 'Không Được Bỏ Trống!' },
              {
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Địa chỉ email không hợp lệ!',
              },
            ]}
          >
            <InputComponent value={stateOrder.email} onChange={handleOnChange} name="email" />
          </Form.Item>

          <Form.Item
            label="Địa chỉ"
            name="dia_chi"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateOrder.dia_chi} onChange={handleOnChange} name='dia_chi' />
          </Form.Item >

          <Form.Item
            label="Số điện thoại"
            name="sdt"
            rules={[
              { required: true, message: 'Không Được Bỏ Trống!' },
              {
                pattern: /^(0?\d{9}|0?\d{10})$/,
                message: 'Số điện thoại không hợp lệ!',
              },
            ]}
          >
            <InputComponent value={stateOrder.sdt} onChange={handleOnChange} name='sdt' />
          </Form.Item>

          <Form.Item
            label="Hình thức thanh toán"
            name="id_hinh_thuc"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <Select value={stateOrder.id_hinh_thuc} onChange={handleOnSelect}
              options={[
                {
                  value: '1',
                  label: 'MOMO',
                },
                {
                  value: '2',
                  label: 'Thanh toán khi nhận hàng (COD)',
                },
              ]}
              />
          </Form.Item>
          </Form>
      </ModalComponent>
    
    </div>
  )
}

export default Cart
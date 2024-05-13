import React, { useState } from 'react'
import { WrapperLeft, WrapperRight, WrapperInfo, WrapperTotal,WrapperCountOrder, WrapperItemOrder, WrapperListOrder, WrapperInputNumber} from './style'
import { Button, Form } from 'antd'
import remcua1 from '../../assets/images/remcua1.jpg'
import { DeleteOutlined, MinusOutlined, PlusOutlined} from '@ant-design/icons'
import ModalComponent from '../../components/ModalComponent/ModalComponent'
import InputComponent from '../../components/InputComponent/InputComponent'


const Cart = () => {
  const [stateOrder, setStateOrder] = useState({
    email: "", 
    dia_chi: "", 
    sdt: "", 
    id_trang_thai: "1", 
    id_hinh_thuc: "1", 
  })

  const handleOnChange =(e) => {
    setStateOrder({
      ...stateOrder,
      [e.target.name] : e.target.value
    })
    console.log('e.target.name: ', e.target.name, e.target.value );
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleCancel =() =>{
    setIsModalOpen(false)
  }
  const handleOK =() =>{
    setIsModalOpen(false)
  }
  return (
    <div style={{background: '#f5f5fa', with: '100%', height: '100vh'}}>
      <div style={{height: '900px'}}>
        <div style={{width:'1900px', height: '50px', fontSize:'25px', alignContent:'center', display:'flex',justifyContent:'center'  }}>
        </div>
        <div style={{fontSize:'25px', alignContent:'center', display:'flex',justifyContent:'center', marginBottom:'50px'}}>
          Giỏ hàng của bạn
        </div>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <WrapperLeft>
          <WrapperListOrder>
            <WrapperItemOrder>
                <div style={{width: '390px', display: 'flex', alignItems: 'center', gap: 4}}> 
                  <img src={remcua1} style={{width: '77px', height: '79px', objectFit: 'cover'}}/>
                  <div style={{
                    width: 260,
                    overflow: 'hidden',
                    textOverflow:'ellipsis',
                    whiteSpace:'nowrap'
                  }}>Rem ngủ</div>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <span>
                    <span style={{ fontSize: '13px', color: '#242424' }}>100.000</span>
                  </span>
                  <WrapperCountOrder>
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} >
                        <MinusOutlined style={{ color: '#000', fontSize: '10px' }} />
                    </button>
                    <WrapperInputNumber defaultValue={1} value={1} size="small" min={1} max={10} />
                    <button style={{ border: 'none', background: 'transparent', cursor: 'pointer' }} >
                        <PlusOutlined style={{ color: '#000', fontSize: '10px' }}/>
                    </button>
                  </WrapperCountOrder>
                  <span style={{color: 'rgb(255, 66, 78)', fontSize: '13px', fontWeight: 500}}>200.000</span>
                  <DeleteOutlined style={{cursor: 'pointer'}} />
                </div>
              </WrapperItemOrder>
            </WrapperListOrder>
          </WrapperLeft >
          <WrapperRight>
              <div style={{width: '100%'}}>
                <WrapperInfo>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontWeight:'bold', fontSize: '15px'}}>
                    <span>Thông tin đơn hàng</span>
                  </div>
                </WrapperInfo>
                <WrapperInfo>
                  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px'}}>
                    <span style={{cursor: 'pointer', fontSize:'15px', marginRight:'60px',color:'blue'}} onClick={() => setIsModalOpen(true)}>
                      Thêm thông tin giao hàng ở đây
                    </span>
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
                    borderRadius: '4px'
                }}
              >
                Thanh toán
              </Button>
          </WrapperRight>
        </div>
      </div>
      <ModalComponent title="Thêm thông tin giao hàng" open={isModalOpen} onOk={handleOK} onCancel={handleCancel}>
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
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateOrder.email} onChange={handleOnChange} name='email' />
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
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateOrder.sdt} onChange={handleOnChange} name='sdt' />
          </Form.Item>
          </Form>
      </ModalComponent>
    </div>
  )
}

export default Cart
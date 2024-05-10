import React, { useEffect, useState } from 'react'
import { WrapperHeader, WrapperUploadFile } from './style'
import { Button , Modal,  Form, Select, message } from 'antd'
import{
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
}from'@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'
import InputComponent from '../InputComponent/InputComponent'
import { getBase64 } from '../../utills'
import * as ProductService from  '../../services/ProductService.js'
import {useMutationHooks} from '../../hook/useMutationHooks.js'
import Loading from '../../components/LoadingComponent/LoadingComponent.jsx'
import { useQuery } from '@tanstack/react-query'
import DrawerComponent from '../DrawerComponent/DrawerComponent.jsx'
import ModalComponent from '../ModalComponent/ModalComponent.jsx'

  
const Product = () => {
  const [isOpenDrawer, setIsOpenDrawer]=useState(false)
  const [rowSelected, setRowSelected] =useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
  const [form] = Form.useForm();

  const [stateProduct, setstateProduct] = useState({
    tenremcua: "", 
    donvi: "", 
    baohanh: "", 
    xuatxu: "", 
    kichthuoc: "", 
    trangthai: "", 
    chatlieu: "", 
    idloairem: "",  
    gia: "",
    hinh_anh : "" 
  });
  
  const handleOnChange =(e) => {
    setstateProduct({
      ...stateProduct,
      [e.target.name] : e.target.value
    })
    console.log('e.target.name: ', e.target.name, e.target.value );
  }

  const handleOnSelect = (value) => {
    setstateProduct({
      ...stateProduct,
      idloairem: value
    });
  };


  const mutation = useMutationHooks(
    (data) => {
      const { tenremcua, 
      donvi, 
      baohanh, 
      xuatxu, 
      kichthuoc, 
      trangthai, 
      chatlieu, 
      idloairem, 
      gia,
      hinh_anh} = data
      ProductService.createProduct({ tenremcua, 
        donvi, 
        baohanh, 
        xuatxu, 
        kichthuoc, 
        trangthai, 
        chatlieu, 
        idloairem, 
        gia,
        hinh_anh  
      })
    }
  )

  const mutationDeleted = useMutationHooks(
    (data) => {
      const { id
      } = data
      const res = ProductService.deleteProduct(
        id)
      return res
    },
  )

  const getAllProducts = async() => {
    const res = await ProductService.getAllProduct()
    return res
  }


  const handleDeleteProduct =() =>{
    mutationDeleted.mutate({id: rowSelected})
  }


  // useEffect(() => {
  //   if (isSuccessDeleted && dataDeleted?.status === '200') {
  //     message.success()
  //     handleCancelDelete()
  //   } else if (isErrorDeleted) {
  //     message.error()
  //   }
  // }, [isSuccessDeleted])

  const {data, isLoading, isSuccess, isError} = mutation
  const { data: dataDeleted, isLoading: isLoadingDeleted, isSuccess: isSuccessDeleted, isError: isErrorDeleted } = mutationDeleted

  const {isLoading : isLoadingProducts, data : products} = useQuery({queryKey: ['products'], queryFn: getAllProducts})
  const renderAction =() =>{
    return(
      <div>
        <DeleteOutlined style={{color:'red', fontSize: '30px', cursor:'pointer',marginRight:'10px'}} onClick={() => setIsModalOpenDelete(true)}/>
        <EditOutlined style={{color:'yellow', fontSize: '30px', cursor:'pointer'}}/>
      </div>
    )
  }
  const columns = [
    {
        title: 'Tên',
        dataIndex: 'ten_rem',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Đơn vị',
        dataIndex: 'don_vi',
    },
    {
        title: 'Bảo hành',
        dataIndex: 'bao_hanh',
    },
    {
      title: 'Xuất xứ',
      dataIndex: 'xuat_xu',
    },
    {
      title: 'Kích thước',
      dataIndex: 'kich_thuoc',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'thang_thai',
    },
    {
      title: 'Chât liệu',
      dataIndex: 'chat_lieu',
    },
    {
      title: 'Loại rèm',
      dataIndex: 'id_loai_rem',
    },
    {
      title: 'Giá',
      dataIndex: 'gia_goc',
    },
    {
      title: 'Tùy chọn',
      dataIndex: 'tuychon',
      render: renderAction  
    },
    
    ]
    const dataTable = products?.length && products?.map((product) => {
      return {...product, key: product._id}
    })

  const onFinish = () => {
    mutation.mutate(stateProduct)
    console.log('finished', stateProduct)
  }
  
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    onFinish();
  };

  const handleCancelDelete= () =>{
    setIsModalOpenDelete(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setstateProduct({
      tenremcua: "", 
      donvi: "", 
      baohanh: "", 
      xuatxu: "", 
      kichthuoc: "", 
      trangthai: "", 
      chatlieu: "", 
      idloairem: "",  
      gia: "",
      hinh_anh : "" 
    })
    form.resetFields()
  };
  const handleOnChangeAvatar = async ({fileList}) => {
    const file = await fileList[0]
    if(!file.url && !file.preview){
      file.preview = await getBase64(file.originFileObj);
    }
    setstateProduct({
      ...stateProduct,
      hinh_anh : file.preview
    })
  }

  return (
    <div>
      <WrapperHeader> Quản lý sản phẩm </WrapperHeader>
      <div style={{marginTop: '10px'}}>
        <Button style={{height:'150px', width: '150px', borderRadius:'6px', borderStyle: 'dashed'}} onClick={() => setIsModalOpen(true)}>
          <PlusOutlined style={{fontSize: '60px'}}/>
        </Button>
      </div>
      <TableComponent columns={columns} isLoading={isLoadingProducts} data={dataTable} onRow={(record, rowIndex) => {
          return {
            onClick: event => {
              setRowSelected(record.id)
            }
          };
        }} />
      <ModalComponent title="Tạo sản phẩm" open={isModalOpen} onOk={handleOk}  onCancel={handleCancel} footer= {null}>
        <Loading isLoading={isLoading}>
          <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          form={form}
          autoComplete="off"
        >
          <Form.Item
            label="Tên Rèm Cửa"
            name="tenremcua"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.tenremcua} onChange={handleOnChange} name='tenremcua' />
          </Form.Item>

          <Form.Item
            label="Đơn Vị"
            name="donvi"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.donvi} onChange={handleOnChange} name='donvi' />
          </Form.Item >

          <Form.Item
            label="Bảo Hành"
            name="baohanh"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.baohanh} onChange={handleOnChange} name='baohanh' />
          </Form.Item>

          <Form.Item
            label="Xuất Xứ"
            name="xuatxu"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.xuatxu} onChange={handleOnChange} name='xuatxu' />
          </Form.Item>

          <Form.Item
            label="Kích Thước"
            name="kichthuoc"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.kichthuoc} onChange={handleOnChange} name='kichthuoc' />
          </Form.Item>

          <Form.Item
            label="Trạng Thái"
            name="trangthai"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.trangthai} onChange={handleOnChange} name='trangthai' />
          </Form.Item>

          <Form.Item
            label="Chất Liệu"
            name="chatlieu"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.chatlieu} onChange={handleOnChange} name='chatlieu' />
          </Form.Item>

          <Form.Item
            label="Giá cả "
            name="gia"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <InputComponent value={stateProduct.gia} onChange={handleOnChange} name='gia' />
          </Form.Item>

          <Form.Item
            label="Id Loại Rèm"
            name="idloairem"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <Select value={stateProduct.idloairem} onChange={handleOnSelect}
              options={[
                {
                  value: '1',
                  label: 'Rèm cửa',
                },
                {
                  value: '2',
                  label: 'Rèm vải',
                },
                {
                  value: '3',
                  label: 'Rèm cuốn',
                },
                {
                  value: '4',
                  label: 'Rèm Roman',
                },
                {
                  value: '5',
                  label: 'Rèm văn phòng',
                },
                {
                  value: '6',
                  label: 'Rèm sáo gỗ',
                },
                {
                  value: '7',
                  label: 'Rèm sáo nhôm',
                },
                {
                  value: '8',
                  label: 'Rèm cầu vồng',
                },
                {
                  value: '9',
                  label: 'Rèm sợi chỉ',
                },
                {
                  value: '10',
                  label: 'Rèm phòng tắm',
                },

              ]}
              />
          </Form.Item>

          <Form.Item
            label="Hình Ảnh"
            name="hinh_anh"
            rules={[{ required: true, message: 'Không Được Bỏ Trống!' }]}
          >
            <WrapperUploadFile onChange={handleOnChangeAvatar} maxCount={1}>
              <Button>
                Select File
              </Button>
              {stateProduct?.hinh_anh && (
                <img src= {stateProduct?.hinh_anh} style={{
                  height: '60px',
                  width: '60px%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginLeft: '10px',
                }} alt= "avatar" />
              )}
            </WrapperUploadFile>
            
          </Form.Item>

         

          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>
      <ModalComponent title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} onOk={handleDeleteProduct}>
        <Loading isLoading={isLoadingDeleted}>
          <div>Bạn có chắc xóa sản phẩm này không?</div>
        </Loading>
      </ModalComponent>

    </div>
  )
}

export default Product
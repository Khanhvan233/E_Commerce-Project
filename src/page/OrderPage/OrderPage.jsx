import React, { useEffect, useState } from 'react'
import {Table, Select } from 'antd';
import './style.css';
import * as service from '../../services/OrderService';
import InputComponentPro from '../../components/InputComponent/InputComponentPro';
import ButtonClickComponent from '../../components/ButtonComponent/ButtonClickComponent';

const OrderPage = () => {
  const [data, setData] = useState([]);
  const [id, setID] = useState(null);
  const [dataRem, setDataRem] = useState([]);
  const [options, setOptions] = useState([]); 
  const [selectedKey, setSelectedKey] = useState();
  const { Option } = Select
  const columnsRem = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Tên Rèm",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Giá gốc",
      dataIndex: "originalPrice",
      key: "originalPrice"
    },
    {
      title: "Giá Áp Dụng",
      dataIndex: "appliedPrice",
      key: "appliedPrice"
    }
  ];



  

  const columnsOrder = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Địa chỉ",
      dataIndex: "dia_chi",
      key: "dia_chi"
    },
    {
      title: "SDT",
      dataIndex: "sdt",
      key: "sdt"
    },
    {
      title: "Thành tiền",
      dataIndex: "thanh_tien",
      key: "thanh_tien"
    },
    {
      title: "Hình thức",
      dataIndex: "hinh_thuc",
      key: "hinh_thuc"
    },
    {
      title: "Trạng thái",
      dataIndex: "trangthai",
      key: "trangthai"
    },
    {
      title: "Ngày tạo",
      dataIndex: "ngay_tao",
      key: "ngay_tao"
    },
  ];

  const callAPIinit = () => {
    service.GetAllOrder().then(data => {
      const newData = []
      for(const order of data.data){
        const dataTable = {
          id : order.id,
          email : order.email,
          dia_chi : order.dia_chi,
          sdt : order.sdt,
          thanh_tien : order.thanh_tien,
          hinh_thuc : order.hinh_thuc,
          trangthai : order.trangthai,
          ngay_tao : order.ngay_tao,
          id_hinhthuc : order.id_hinh_thuc,
          id_trang_thai : order.id_trang_thai
         }
         newData.push(dataTable)
      }
      setData(newData);

      service.GetAllStatus().then(response => {
        setOptions(response.data);
      }).catch(error => {
        alert(" Sever không phản hồi ");
      });

    }).catch(error =>{
      alert(" Sever không phải hồi ");
    });


  }

  useEffect(() => {
    callAPIinit();
  }, []);

  const handleRowClick = (record, rowIndex) => {
    setID(record.id);
    console.log(record.trangthai);
    setSelectedKey(record.trangthai);

    const data = {
      id: record.id
    };

    service.GetProductOrder(data).then(data => {
      const filteredData = data.data.map(item => ({
        key: item.id_remcua, 
        id: item.id_remcua,
        name: item.ten_rem,
        originalPrice: item.gia_goc,
        appliedPrice: item.gia_ap_dung
      }));
      setDataRem(filteredData);

    }).catch(error => {
      console.error("Failed to fetch promotion:", error); 
      alert("Sever không phản hồi vui lòng gọi lại sau");
  });


  };

  const handleChange = (value, option) => {
    setSelectedKey(value);
  }

  const updateOrder = () => {
    let id_trang_thai = null
    for(const opt of options){
      if(opt.ten == selectedKey){
        id_trang_thai = opt.id
      }
    }

    if(id_trang_thai === null){
      alert("Trạng thái không hợp lệ");
      return
    }

    const data = {
      id: id,
      id_trang_thai : id_trang_thai
    }

    service.UpdateOrderStutus(data).then(res => {
      callAPIinit();
      alert("Cập nhật thành công");
    }).catch(error => {
      alert(" Sever không phản hồi ");
    });

  }



  return (
    <div>
      <div>
          <h1 className="title"> ĐƠN HÀNG </h1>
      </div>
      <div className="grid-container">
            <InputComponentPro className="readonly-input" placeholder="ID" values={id} />

            <Select
              showSearch
              style={{ width: '100%' }}  
              placeholder="Chọn trạng thái cho đơn hàng"  
              optionFilterProp="children" 
              onChange={handleChange}
              value={selectedKey} 
            >
             {options.map(opt => (
                <Option key={opt.id} value={opt.ten}></Option>
              ))}
          </Select>

          <ButtonClickComponent textButton="Cập nhật trạng thái" className="button-style" onClick={updateOrder}/>
            



            
        </div>
      <div>
          <Table  columns={columnsOrder} 
                  dataSource={data} 
                  pagination={{ pageSize: 5 }} 
                  onRow={(record, rowIndex) => {
                  return {
                    onClick: () => handleRowClick(record, rowIndex)
                  };
                }}
          />;
      </div>
      <div>
          <h1 className="title"> DANH SÁCH SẢN PHẨN CỦA ĐƠN HÀNG </h1>
      </div>
      <div>
      <Table 
            columns={columnsRem} 
            dataSource={dataRem}>
            pagination={{ pageSize: 5 }}
          </Table>

      </div>

    </div>
    
  )
}

export default OrderPage
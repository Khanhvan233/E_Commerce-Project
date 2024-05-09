
import TableComponent from "../../components/TableComponent/TableComponent";
import * as service from "../../services/PromotionService";
import React, { useEffect, useState } from 'react';
import { Checkbox, Divider, Radio, Table } from 'antd';
import './style.css';
import InputComponent from "../../components/InputComponent/InputComponent";
import InputDateTimeComponent from "../../components/InputDateTimeComponent/InputDateTimeComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const PromotionPage = () => {
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);
    const [columnsRem, setColumnsRem] = useState([]);
    const [dataRem, setDataRem] = useState([]);
    const [id, setID] = useState(null);
    const [name, setName] = useState(null);
    const [percent, setPercent] = useState(null);
    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);

    const handleRowClick = (record, rowIndex) => {
      setID(record.id);
      setName(record.ten);
      setPercent(record.phan_tram);
      setDateStart(record.ngaybatdau);
      setDateEnd(record.ngayketthuc);

      service.getProductPromotion(record.id).then(data => {
        if (data.length > 0) {
          console.log(data);
        }
      }).catch(error => {
        console.error("Failed to fetch promotion:", error); 
        alert("Sever không phản hồi vui lòng gọi lại sau");
    });

    };




    useEffect(() => {
      service.getPromotion().then(data => {
        if (data.length > 0) {
            // Tạo columns dựa trên keys của đối tượng đầu tiên
            const columns = Object.keys(data[0]).map(key => ({
              title: key.charAt(0).toUpperCase() + key.slice(1), 
              dataIndex: key,
              key: key,
              render: text => <span>{text}</span>
            }));

            const newData = data.map((item, index) => ({
              key: index, 
              ...item
            }));
    
            setColumns(columns);
            setData(newData);
          }
    }).catch(error => {
        console.error("Failed to fetch promotion:", error); 
        alert("Sever không phản hồi vui lòng gọi lại sau");
    });

    }, []);

    

    return(
      <div>
        <div>
          <h1 className="title"> Khuyến mãi </h1>
        </div>
        <div>
          <div className="grid-container">
            <InputComponent className="readonly-input" placeholder="ID" value={id} />
            <InputComponent placeholder="Nhập Tên Khuyến Mãi" value={name}/>
            <InputComponent placeholder="Nhập Phần Trăm Khuyến Mãi" value={percent}/>
            <InputDateTimeComponent placeholder="Nhập Ngày Bắt Đầu" value={dateStart}/>
            <InputDateTimeComponent placeholder="Nhập Ngày Kết Thúc" value={dateEnd}/>
          </div>
          <div className="grid-container">
            <ButtonComponent textButton="Thêm" className="button-style"/>
            <ButtonComponent textButton="Xoá" className="button-style"/>
            <ButtonComponent textButton="Sửa" className="button-style"/>


          </div>
        </div>
        <div>
            <Table columns={columns} 
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
          <h1 className="title"> Danh sách khuyến mãi cho sản phẩm </h1>
        </div>

      </div>
        
    )
}

export default PromotionPage;
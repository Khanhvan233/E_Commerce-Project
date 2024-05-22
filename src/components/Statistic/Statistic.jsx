import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { InputNumber, Button } from 'antd';
import * as AdminService from  '../../services/AdminService'
import { useQuery } from '@tanstack/react-query';
const data = [
  {
    month: 'Tháng 1',
    revenue: 50000,
  },
  {
    month: 'Tháng 2',
    revenue: 65000,
  },
  {
    month: 'Tháng 3',
    revenue: 75000,
  },
  {
    month: 'Tháng 4',
    revenue: 80000,
  },
  {
    month: 'Tháng 5',
    revenue: 90000,
  },
  {
    month: 'Tháng 6',
    revenue: 85000,
  },
  {
    month: 'Tháng 7',
    revenue: 75000,
  },
  {
    month: 'Tháng 8',
    revenue: 70000,
  },
  {
    month: 'Tháng 9',
    revenue: 80000,
  },
  {
    month: 'Tháng 10',
    revenue: 85000,
  },
  {
    month: 'Tháng 11',
    revenue: 90000,
  },
  {
    month: 'Tháng 12',
    revenue: 95000,
  },
]

const Statistic = () => {
  const [Year, setYear] =useState('')
  const onChange = (newValue) => {
    setYear(newValue);
  }
  const data = {
    nam : Year
  }
  const fetchStatistic = async() => {
    const res = await AdminService.statistic(data)
    return res
  }
  const {data: dataStatistic} = useQuery({queryKey: ['Statistic_data'], queryFn: fetchStatistic})
console.log(dataStatistic)
  return (
    <div style={{ display: 'flex', marginTop: '35px'}}>
      <div style={{marginLeft:'20px'}}> 
        <InputNumber min={2024} max={2034} defaultValue={2024} onChange={onChange}/>;
        <div>
          <Button style={{marginTop:'20px', color:'blueviolet'}}>
            Xem doanh thu
          </Button>
        </div>
      </div>
    <BarChart width={1300} height={600} data={data}>
      <XAxis dataKey="month" angle={-45} textAnchor="end" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="revenue" fill="#8884d8" />
    </BarChart>
    </div>
  );
};
export default Statistic;
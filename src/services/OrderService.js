
import axios from "axios";


export function GetAllOrder(){
    return axios.get(`${process.env.REACT_APP_API_URL}/order_get`);
}


export function GetProductOrder(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/order_get_id`,data);
}



export function GetAllStatus(){
    return axios.get(`${process.env.REACT_APP_API_URL}/trang_thai`);
}


export function UpdateOrderStutus(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/order_update_status`,data);
}

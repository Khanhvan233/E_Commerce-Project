import axios from "axios";

export const getPromotion = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/promotion_get`);
    return response.data;
}


export function GetProductPromotion(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_get_id`,data);
}


export function GetAllProduct(){
    return axios.get(`${process.env.REACT_APP_API_URL}/product_get`);
}


export function AddPromotion(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_add`, data);
}


export function DeletePromotion(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_del`, data);
}

export function UpdatePromotion(data){
    return axios.post(`${process.env.REACT_APP_API_URL}/promotion_update`, data);
}



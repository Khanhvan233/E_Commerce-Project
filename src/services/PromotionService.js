import axios from "axios";

export const getPromotion = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/promotion_get`);
    return response.data;
}

export const getProductPromotion = async (data) => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/promotion_get_id`, data);
    return response.data;
}


import axiosClient from "../commons/AxiosClient";

const url = "/auth";

const loginAPI = {
    login : (url, params) => {
        return axiosClient.post(url,params)
} 
}
export default loginAPI;
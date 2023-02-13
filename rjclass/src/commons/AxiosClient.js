import axios from "axios";

const axiosClient = axios.create({
    baseURL : "http://localhost:8081",
    headers : {
        "Content-Type": "application/json; charset=utf-8"
    },
    paramsSerializer : params => params,
});

axiosClient.interceptors.request.use(async(config) =>{
    var token = getAccessToken();
    config.headers.Authorization = `Bearer ${token.access_token}`;
    return config;
});

const getAccessToken = () => {
    let token = sessionStorage.getItem("access_token");
    return JSON.parse(token ? token : "");
}

axiosClient.interceptors.response.use((response) => {
    if (response && response.data)
        return response
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;
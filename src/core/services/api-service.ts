import 'axios'
import {IUser, User} from "../types/user";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";


const API_URL = 'https://6172a4fa61ed900017c409b3.mockapi.io'

const config: AxiosRequestConfig = {
    baseURL:API_URL,
    timeout:5000,
}

const client = axios.create(config)
const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => client.get(url).then(responseBody),
    post: (url: string, body: {}) => client.post(url, body).then(responseBody),
    put: (url: string, body: {}) => client.put(url, body).then(responseBody),
    delete: (url: string) => client.delete(url).then(responseBody),
};

export const Service = {
    getUsers: (): Promise<User[]> => {
        return requests.get('user') as Promise<User[]>
    }
}





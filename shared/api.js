import axios from 'axios'
import {getAPIEndpointsConfig} from "../config";
import qs from "qs";

export const apiEndpoints = getAPIEndpointsConfig();

const API_BASE_URL = apiEndpoints.backend
const API_ROOT = apiEndpoints.frontend

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 100000
})

const jsonApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 100000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

const rootApi = axios.create({
    baseURL: API_ROOT,
    timeout: 500000
})

const jsonRootApi = axios.create({
    baseURL: API_ROOT,
    timeout: 500000,
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

function buildAuthHeader(token) {
    return {
        headers: {
            'Authorization': `Bearer ${token.access_token}`
        }
    }
}

export const BASE_API = {
    loginByCredentials(payload) {
        return api.post('/login/access-token', qs.stringify(payload), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    getOrderById(payload, token) {
        return api.get(`/order/${payload.orderId}`, buildAuthHeader(token))
    }
}

export const API = {
    loginByCredentials(payload) {
        return jsonRootApi.post('/login/access-token', qs.stringify(payload), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    getOrderById(payload) {
        return jsonRootApi.get(`/order/${payload.orderId}`)
    }
}

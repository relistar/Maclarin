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
    },
    changeDeliveryType(payload, token) {
        return jsonApi.post(`/order/${payload.orderId}/delivery-type/${payload.deliveryTypeId}`, null, buildAuthHeader(token));
    },
    changeShop(payload, token) {
        return jsonApi.post(`/order/${payload.orderId}/shop-address/${payload.shopId}`, null, buildAuthHeader(token));
    },
    changeComments(query, body, token) {
        return jsonApi.post(`/order/${query.orderId}`, qs.stringify(body), buildAuthHeader(token));
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
    },
    changeDeliveryType(payload, token) {
        return jsonRootApi.post(`/order/${payload.orderId}/delivery-type/${payload.deliveryTypeId}`, null, buildAuthHeader(token))
    },
    changeShop(payload, token) {
        return jsonRootApi.post(`/order/${payload.orderId}/shop-address/${payload.shopId}`, null, buildAuthHeader(token))
    },
    changeComments(query, body, token) {
        return jsonRootApi.post(`/order/${query.orderId}/comments`, body, buildAuthHeader(token))
    },
    changeDeliveryAddress(query, body, token) {
        var data = JSON.stringify(2);

        var config = {
            method: 'post',
            url: 'https://afanapi.dev-tadoit.ru/api/v1/order/2/delivery_address/',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzI1MDMzNjUsInN1YiI6IjEifQ.bVJHsUBIolh1d4BRXyGkiTNaCSM8zYx1cvcXqPxfOgM',
                'Content-Type': 'application/json'
            },
            data : data
        };

        return axios(config)
        /*return jsonRootApi.post(`/order/${query.orderId}/delivery_address`, body, buildAuthHeader(token))
    */},
    changeOrderLineQuantity(query, body, token) {
        return jsonRootApi.post(`/order/${query.orderId}/${query.orderLineId}`, body, buildAuthHeader(token))
    }
}
